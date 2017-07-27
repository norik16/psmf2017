<?php
	$file = file_get_contents("https://docs.google.com/document/d/(!!!REDACTED!!!)/pub");
	$html = explode('</div><div id="footer">',explode('<div id="contents">', $file)[1])[0];
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Informace pro účastníky</title>
	<link href='https://fonts.googleapis.com/css?family=Dosis:400&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<style>
		body
		{
			margin: 40px;
		}

		@media (min-width: 800px)
		{
			body
			{
				background-image: url(img/pad.png);
				background-repeat: no-repeat;
				background-position: 90% 2%;
				background-attachment: fixed;
			}
		}

		*
		{
			font-family: 'Dosis' !important;
		}
	</style>
</head>
<body>
	<?php echo $html; ?>
</body>
</html>
