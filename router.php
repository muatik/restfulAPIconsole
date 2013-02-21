<?php
require_once('quickCurl.php');
$r=$_REQUEST;

$path=$r['path'];
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


if (isset($r['dataFieldNs'])){
	
	$dataFields=array();
	
	foreach($r['dataFieldNs'] as $i=>$n)
		$dataFields[$r['dataFieldNs'][$i]]=$r['dataFieldVs'][$i];
	
	$postdata = http_build_query($dataFields);
	
}else $postdata=null;

echo quickCurl::run($host,$path,$method,$version,$headers,$postdata);

?>
