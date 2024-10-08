<?php
	
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