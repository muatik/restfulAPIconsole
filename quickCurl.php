<?php

class quickCurl
{
	public static function run($url,$path,$reqtype="POST",
		$httpv="HTTP/1.1",$headers=false,$data=null){ 
		
		if (!function_exists('curl_init')){
			die('Curl is not installed!');
		}
 
		$ch = curl_init(); 
        	curl_setopt($ch, CURLOPT_URL,$url.'/'.$path);
                
		$headerst = array($reqtype." ".$path." ".$httpv); 
		
		if ($headers)
			foreach($headers as $k) $headerst[]=$k;
		
		if ($data){
			$headerst[]="Content-length: ".strlen($data);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		}
		
      		curl_setopt($ch, CURLOPT_HTTPHEADER, $headerst);
      		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
      		curl_setopt($ch, CURLOPT_TIMEOUT, 30); 
		
		$result = curl_exec($ch); 		
		curl_close($ch); 		
	 
		return $result;
	}
}
?>
