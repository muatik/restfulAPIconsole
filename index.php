<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="tr" lang="tr" xmlns:fb="http://ogp.me/ns/fb#">
<head>
<title>API Console</title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/api.js"></script>
<script type="text/javascript" src="js/gcp/prettify.js"></script>

<link href="css/prettify.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/form.css" />

</head>
<body>


<div id="sample"></div>

<script>
/*

example of apicall.json

var APICalls=[
	{
		title: "Start an analysis",
		description: "bla bla bla"
		examples:[
			{
				title: "simple hourly analysis",	
				headers:[
					{name: "host", value: "trend.botego.net"}
				],
				path: "/analysis/hourly/2015-5555",
				requestMethod:"POST",
				postField:[
				]
			},
			{
				title: "simple daily analysis with restrictions",	
				headers:[
					{name: "host", value: "trend.botego.net"}
				],
				path: "/analysis/hourly/2015-5555",
				requestMethod:"POST",
				postField:[
					{name: "language", value:"tr"},
					{name: "gender", value:"male"}
				]
			}
		]
	}
]
 */


var t={
	container:"#e",
	headers:[
		{name:"HOST",value:"training.kelimeci.net"}
	],
	path:"/",
	requestMethod:"GET",
	postFields:[
		{name:"email",value:"muatik@gmail.com"}
	] 
};

$.uAPIconsole(t);


</script>

</body>
</html>

