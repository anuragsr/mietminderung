<?php
  include('zip.php');

  $data = json_decode(file_get_contents('php://input'), true);
  $file = $data["txtFile"];
  $u_id = $data["u_id"];
  $user = $data["user"];
  $path = $data["path"];
  $prEmailTxt = $data["prEmailTxt"];

  $textToAdd = "Payment Response: ".$data["text"];
  
  // Update text file
  $txtFile = fopen($file, "a");
  fwrite($txtFile, $textToAdd);
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

  $date = date('Y-m-d H:i:s');

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
  $txt.= "  <b>Payment Response: </b>".$data["text"]."<br/><br/>";
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

  $data["result"] = mail($to, $subject, $txt, $headers);
  echo json_encode($data);
?>
