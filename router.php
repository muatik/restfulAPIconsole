<?php
require_once('quickCurl.php');

// post edilecek veriler
//$data=array('language'=>'tr','name'=>'alpay');
//$postdata = http_build_query($data);
$r=$_REQUEST;

//$path='analysis/cached';
//$path='analysis/'.$analysisId."/events/".$event;
//$path='analysis/'.$analysisId;
//$path='analysis/'.$interval.'/'.$date;

$path=$r['path'];
$version=$r['version'];
$method=$r['method'];

foreach($r['headerFieldNs'] as $i=>$n)
	if($n=='HOST')
		$host=$r['headerFieldVs'][$i];

echo quickCurl::run($host, $path, $method, $version, $headers=false);

?>
