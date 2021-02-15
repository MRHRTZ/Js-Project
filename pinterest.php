<?php
if (isset($_POST['btnUpload'])) {
     $url = "http://mrhrtz-wabot.000webhostapp.com/upload.php";
     $durl = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html";
     $filename = $_FILES['file']['name'];
     $filedata = $_FILES['file']['tmp_name'];
     $filesize = $_FILES['file']['size'];
     if ($filedata != '') {
          $headers = array("Content-Type:multipart/form-data"); // cURL headers for file uploading
          $postfields = array("text[]" => "My text", "submit" => "GO", "token" => "52a077bd95512ffab82de1f08652bc75");
          $ch = curl_init();
          $options = array(
               CURLOPT_URL => $durl,
               CURLOPT_HEADER => true,
               CURLOPT_POST => 1,
               CURLOPT_HTTPHEADER => $headers,
               CURLOPT_POSTFIELDS => $postfields,
               //CURLOPT_INFILESIZE => $filesize,
               CURLOPT_RETURNTRANSFER => true
          ); // cURL options
          curl_setopt_array($ch, $options);
          curl_exec($ch);
          if (!curl_errno($ch)) {
               $info = curl_getinfo($ch);
               if ($info['http_code'] == 200)
                    $errmsg = "File uploaded successfully";
          } else {
               $errmsg = curl_error($ch);
          }
          curl_close($ch);
     }
}
