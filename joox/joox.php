<?php
set_time_limit(0);
ignore_user_abort(1);

header('Content-Type: application/json');

	$ch = curl_init('http://api.joox.com/web-fcgi-bin//web_search?callback=mutiara&lang=id&country=id&type=0&search_input='.rawurlencode(trim($_GET['q'])).'&_='.time());
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36');
	$ser = curl_exec($ch);
	curl_close($ch);
	$ser = str_replace('mutiara(', '', $ser);
	$ser = str_replace(')', '', $ser);
	$ser = json_decode($ser);

// $ch = curl_init('http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid='.base64_decode(trim($_GET['id'])).'&lang=id&country=id&from_type=null&channel_id=null&_='.time());
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-Forwarded-For: 36.73.34.109"));
// curl_setopt($ch, CURLOPT_COOKIE, 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;');
// curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36');
// $json = curl_exec($ch);
// $json = str_replace('MusicInfoCallback(', '', $json);
// $json = str_replace(')', '', $json);
// $json = json_decode($json);


// $ch = curl_init('http://api.joox.com/web-fcgi-bin/web_lyric?musicid='.base64_decode(trim($_GET['id'])).'&lang=id&country=id&_='.time());
// 	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// 	curl_setopt($ch, CURLOPT_HTTPHEADER, array("X-Forwarded-For: 36.73.34.109"));
// 	curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36');
// 	$ly = curl_exec($ch);
// 	curl_close($ch);
// 	$ly = str_replace('MusicJsonCallback(', '', $ly);
// 	$ly = str_replace(')', '', $ly);
// 	$ly = json_decode($ly);
	
	// $ly = str_replace('[999:00.00]***Lirik didapat dari pihak ketiga***', '***Recoded By MRHRTZ***', base64_decode($ly->lyric));
    // $ly = str_replace('[offset:0]', '', $ly);
    

// $result = $json+$ly;

echo json_encode($ser);
?>
