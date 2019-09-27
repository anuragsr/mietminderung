<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

  // For localhost
  // $database = "x_mm_db";
  // $host = "localhost"; 
  // $user = "root";
  // $pass = " ";


  // For real host
  $database = "mietminderung";
  $host = "sql390.your-server.de";
  $user = "pickelm_2";
  $pass = "KZjcuWhgd47K4Dm6"; 
  
  mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
  $conn = new mysqli($host, $user, $pass, $database);     
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  // else{
  //   var_dump($conn);
  //   var_dump(extension_loaded('zip'));
  // }
  
  $conn->query("SET NAMES 'utf8'");    

  function selectQuery($q, $conn){
    $arr = array();
    $ret = array();
    $result = $conn->query($q);
    
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
          $arr[] = $row;
      }
    }
    
    if(count($arr) > 0){
      $ret["result"] = true;
      $ret["data"] = $arr;
    }else{
      $ret["result"] = false;
      $ret["data"] = array();
      $ret["message"] = "Sorry, no records found!";
    }

    return $ret;
  }    

  function generateRand($length = 4) {
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
      $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
  }

  function normalizeFiles($files = array()) {
    $normalized_array = array();
    foreach($files as $index => $file) {
      if (!is_array($file['name'])) {
        $normalized_array[$index][] = $file;
        continue;
      }
      foreach($file['name'] as $idx => $name) {
        $normalized_array[$index][$idx] = array(
          'name' => $name,
          'type' => $file['type'][$idx],
          'tmp_name' => $file['tmp_name'][$idx],
          'error' => $file['error'][$idx],
          'size' => $file['size'][$idx]
        );
      }
    }
    return $normalized_array;
  }

  function zipData($source, $destination, $arr) {
    // return extension_loaded('zip');
    if (extension_loaded('zip')) {
      if (file_exists($source)) {
          $zip = new ZipArchive();
          if ($zip->open($destination, ZIPARCHIVE::CREATE)) {
            $source = realpath($source);
            if (is_dir($source)) {
              $iterator = new RecursiveDirectoryIterator($source);
              // skip dot files while iterating 
              $iterator->setFlags(RecursiveDirectoryIterator::SKIP_DOTS);
              $files = new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::SELF_FIRST);
              foreach ($files as $file) {
                $file = realpath($file);
                if (is_dir($file)) {
                  // $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'\\', '', $file)); // Windows System
                  $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'/', '', $file)); // Unix System
                  // $zip->addEmptyDir(str_replace($source.'\\', '', $file)); // Windows System
                  $zip->addEmptyDir(str_replace($source.'/', '', $file)); // Unix System
                } else if (is_file($file)) {
                  // $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'\\', '', $file)); // Windows System
                  $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'/', '', $file)); // Unix System
                  // $zip->addFromString(str_replace($source.'\\', '', $file), file_get_contents($file)); // Windows System
                  $zip->addFromString(str_replace($source.'/', '', $file), file_get_contents($file)); // Unix System
                }
              }
            } else if (is_file($source)) {
              $zip->addFromString(basename($source), file_get_contents($source));
            }
          }
        ;
        return array("result"=>$zip->close(), "files"=>$arr);
      }
    }
    return false;
  }
?>