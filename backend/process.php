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
	
  echo json_encode(array(
    "result"=>$result,
    "u_id"=>$u_id,
    "path"=>$path,
    "prEmailTxt"=>$prEmailTxt,
    "txtFile"=>$path."/answers.txt"
  ));

  // echo json_encode(array(
  //   "u"=>$user
  //   , "a"=>$ques
  //   , "f"=>$files
  //   , "z"=>$zipData
  // ));

  // echo json_encode(array("u"=>$user, "a"=>$ques, "f"=>$fileObj));
  // echo json_encode(array("m"=>"hello"));

?>
