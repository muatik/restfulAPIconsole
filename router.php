<?php
require_once('quickCurl.php');
$r=$_REQUEST;

$patht=explode('/',$r['path']);
$path='';
if (isset($patht))
	foreach($patht as $p){
		if (!empty($p))
			 $path.='/'.rawurlencode($p);
	}

$version=$r['version'];
$method=$r['method'];

if (isset($r['headerFieldNs'])){
	
	$headers=array();
	
	foreach($r['headerFieldNs'] as $i=>$n){
		if($n=='host')
			$host=$r['headerFieldVs'][$i];
					
		$headers[]=$n.':'.$r['headerFieldVs'][$i];
		
		$dataFields[$r['headerFieldNs'][$i]]=$r['headerFieldVs'][$i];
	}	
}


if (isset($r['postFieldNs'])){
	
	$postFields=array();
	
	foreach($r['postFieldNs'] as $i=>$n)
		$postFields[$r['postFieldNs'][$i]]=$r['postFieldVs'][$i];
	
	$postdata = http_build_query($postFields);
	
}else $postdata=null;

echo quickCurl::run($host,$path,$method,$version,$headers,$postdata);

?>
