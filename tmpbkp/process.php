<?php
  include('dbConnect.php');

  $ques = json_decode(stripslashes($_REQUEST["ques"]), true);
  $user = json_decode(stripslashes($_REQUEST["user"]), true);

  $fileObj = normalizeFiles($_FILES);
  $result  = true;

  if(count($fileObj)){
    $files = $fileObj["files"];
  }else{
    $files = array();
  }

  // Add Questionnaire Details
  $q_id = 'Q'.generateRand(5);
  $prEmailTxt = "";

  $answersTxt = "Name: ".$user['name']."\n";
  $answersTxt.= "Email: ".$user['email']."\n";
	$answersTxt.= "Telephone: ".$user['phone']."\n";
  $answersTxt.= "Street: ".$user['street']."\n";
  $answersTxt.= "City: ".$user['city']."\n";
  $answersTxt.= "Postcode: ".$user['postcode']."\n\n";

  for($i = 0; $i < count($ques); $i++){
    $curr = $ques[$i];
    $stmt = $conn->prepare("
      INSERT INTO x_ques_2076 (
        q_id,
        qa_idx,
        q_value,
        a_value
      )
      VALUES ( ?, ?, ?, ? )
    ");

    $q = strip_tags($curr["q"]["q"]);

    $stmt->bind_param("ssss",
      $q_id,
      $curr["q"]["l"],
      $q,
      $curr["a"]["text"]
    );

    $result && $stmt->execute();

    $prEmailTxt.= "<b>Question: </b>".$q."<br/>";
    $prEmailTxt.= "<b>Answer: </b>".$curr["a"]["text"]."<br/><br/>";

    $answersTxt.= "Question: ".$q."\n";
    $answersTxt.= "Answer: ".$curr["a"]["text"]."\n\n";
  }

  // Add user details
  $u_id = 'U'.generateRand(5);

  $stmt = $conn->prepare("
    INSERT INTO x_usr_3091 (
      id,
      name,
      email,
      street,
      city,
      postcode,
      notes,
      q_id,
      date_created
    )
    VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )
  ");

  $date = date('Y-m-d H:i:s');

  $stmt->bind_param("sssssssss",
    $u_id,
    $user['name'],
    $user['email'],
    $user['street'],
    $user['city'],
    $user['postcode'],
    $user['notes'],
    $q_id,
    $date
  );

  $result && $stmt->execute();
  
  // Create folder
	$path = "../upload/".$u_id." - ".$user['name'];
  mkdir($path, 0755, true);
		
  // Upload images
  if(count($files)){
    for($i = 0; $i < count($files); $i++){
      $img = $files[$i];
      $newPath = $path."/".generateRand(6)."_".$img["name"];
      move_uploaded_file($img["tmp_name"], $newPath);
    }
  }
	
  // Create .txt file containing all answers and details
  $answersTxt.= "Notes: ".$user['notes']."\n\n";
  $answersTxt.= "Image Upload Path: upload/".$u_id." - ".$user['name']."\n\n";
  $answersTxt.= "Date & Time: ".$date."\n\n";
  $txtFile = fopen($path."/answers.txt", "w");
  fwrite($txtFile, $answersTxt);
  fclose($txtFile);

	// Create Zip file with contents of folder
	$arr = array();
	$attName = "attachments_".$u_id." - ".$user['name'].".zip";
	$zipFile  = $path."/".$attName;

	zipData($path, $zipFile, $arr);

	// Preparing attachments
	$content = file_get_contents($zipFile);
	$content = chunk_split(base64_encode($content));

  // a random hash will be necessary to send mixed content
  $separator = md5(time());

  // carriage return type (RFC)
  // $eol = "\r\n";
  $eol = PHP_EOL;

  // Common Headers for email
  // main header (multipart mandatory)
  $headers = "From: Mietminderung Team <felix@mietminderung.com>" . $eol;
  $headers .= "Reply-To: felix.gerlach.gera@googlemail.com" . $eol;
  $headers .= "Return-Path: felix.gerlach.gera@googlemail.com" . $eol;
  $headers .= "MIME-Version: 1.0" . $eol;
  $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
  $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
  $headers .= "This is a MIME encoded message." . $eol;

  // Primary Email
  // Email Text
  $txt = "<div style='font-size: 1rem;'>";
  $txt.= "  Hallo Felix,<br/><br/>";
  $txt.= "  A new user has answered the questionnaire. Below are the user's details:<br/><br/>";
  $txt.= "  <b>Name: </b>".$user['name']."<br/>";
  $txt.= "  <b>Email: </b>".$user['email']."<br/>";
	$txt.= "  <b>Telephone: </b>".$user['phone']."<br/>";
  $txt.= "  <b>Street: </b>".$user['street']."<br/>";
  $txt.= "  <b>City: </b>".$user['city']."<br/>";
  $txt.= "  <b>Postcode: </b>".$user['postcode']."<br/><br/>";
  $txt.= "  The questions and their answers are as follows:<br/><br/>";
  $txt.= "  ".$prEmailTxt."";
  $txt.= "  <b>Notes: </b>".$user['notes']."<br/><br/>";
  $txt.= "  <b>Image Upload Path: </b>upload/".$u_id." - ".$user['name']."<br/><br/>";
  $txt.= "  <b>Date & Time: </b>".$date."<br/><br/>";
  $txt.= "  Thanks and Regards,<br/>";
  $txt.= "  Mietminderung Team";
  $txt.= "</div>";

  // Message
  $body = "--" . $separator . $eol;
  $body .= "Content-Type: text/html; charset=UTF-8" . $eol;
  $body .= "Content-Transfer-Encoding: 8bit" . $eol. $eol;
  $body .= $txt . $eol;

	// Email Attachment
	$body .= "--" . $separator . $eol;
	$body .= "Content-Type: application/octet-stream; name=\"" . $attName . "\"" . $eol;
	$body .= "Content-Transfer-Encoding: base64" . $eol;
	$body .= "Content-Disposition: attachment" . $eol. $eol;
	$body .= $content . $eol;

  $body .= "--" . $separator . "--";

  $to = "felix.gerlach.gera@googlemail.com, paul@mietminderung.com";
  // $to = "felix.gerlach@tum.de, felix.gerlach.gera@googlemail.com, anurag.131092@gmail.com";
  // $to = "anurag.131092@gmail.com";
  $subject = "Eine Neue Anfrage - ".$user['name'];
  $result = mail($to, $subject, $body, $headers);

  // Secondary Email
  $headers = "MIME-Version: 1.0". $eol;
  $headers.= "Content-type:text/html;charset=UTF-8". $eol;
  $headers.= "From: Felix von Mietminderung <felix@mietminderung.com>";

  $to = $user['email'];
  $subject = "Deine Anfrage bei Mietminderung.com";
  $txt = "<div style='font-size: 1rem;'>";
  $txt.= "  Hi ".$user['name'].",<br/><br/>";
  $txt.= "  wir haben deine Anfrage erfolgreich erhalten und werden diese umgehend bearbeiten.<br/>";
  $txt.= "  Wir werden uns umgehend bei dir melden, sobald wir Neuigkeiten haben.<br/><br/>";
  $txt.= "  Bis dahin,<br/>";
  $txt.= "  Felix von Mietminderung";
  $txt.= "</div>";

  $result = $result && mail($to, $subject, $txt, $headers);
  echo json_encode(array("result"=>$result));

  // echo json_encode(array(
  //   "u"=>$user
  //   , "a"=>$ques
  //   , "f"=>$files
  //   , "z"=>$zipData
  // ));

  // echo json_encode(array("u"=>$user, "a"=>$ques, "f"=>$fileObj));
  // echo json_encode(array("m"=>"hello"));

?>
