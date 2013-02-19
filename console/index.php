<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="tr" lang="tr" xmlns:fb="http://ogp.me/ns/fb#">
<head>
<title>API Console</title>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/api.js"></script>

<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/form.css" />

</head>
<body>

<form class="APIForm" action="?" method="post">
	<div class="fl"><label>EXAMPLES: </label><select class="examples">
		<option value="GET">Starts an analysis</option>
	</select></div>
	<div class="fl"><label>TYPE: </label><select class="type">
		<option value="GET">GET</option>
		<option value="POST">POST</option>
		<option value="PUT">PUT</option>
		<option value="DELETE">DELETE</option>
	</select></div>
	<div class="fl"><label>HOST: </label><input type="text" class="host"
		value="localhost" /> </div>
	<div class="fl"><label>PATH: </label><input type="text" class="path" 
		value="trend/trendAnalysis/API/console/test.php" /> </div>
	<div class="fl"><label>POST FIELDS: </label>
		<a href="#" class="addField">Add field</a>
			<ul class="postFields">
			<li>
				<label>Name: </label><input class="n" type="text" />
				<label>Value: </label><input class="v" type="text" />
				<a href="" class="remove">Remove</a>
			</li>
		</ul>
	</div>
	<div class="fl">
		<input type="submit" value="Submit" />
		<input type="reset" value="Reset" />
	</div>
</form>

</body>
</html>

