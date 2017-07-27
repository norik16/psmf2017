<?php
function print_row($row, $header = FALSE)
{
	$out = "<tr>";
	foreach($row as $val) {
		$txt = htmlspecialchars($val);
		$tag = $header ? "th" : "td";
	    $out .= "<$tag>$txt</$tag>";
	}
	$out .= "</tr>";
	echo $out;
	return true;
}

include("nacti_ucastniky.php");
$u = nacti_ucastniky();
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Seznam účastníků</title>
	<meta http-equiv="refresh" content="60">
	<link href='https://fonts.googleapis.com/css?family=Dosis:400&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
	<style>
		/*!
		Pure v0.6.0
		Copyright 2014 Yahoo! Inc. All rights reserved.
		Licensed under the BSD License.
		https://github.com/yahoo/pure/blob/master/LICENSE.md
		*/
		.pure-table {
		    border-collapse: collapse;
		    border-spacing: 0;
		    empty-cells: show;
		    border: 1px solid #cbcbcb;
		}

		.pure-table caption {
		    color: #000;
		    font: italic 85%/1 arial, sans-serif;
		    padding: 1em 0;
		    text-align: center;
		}

		.pure-table td,
		.pure-table th {
		    border-left: 1px solid #cbcbcb;
		    border-width: 0 0 0 1px;
		    font-size: inherit;
		    margin: 0;
		    overflow: visible;
		    padding: 0.5em 1em;
		}

		.pure-table td:first-child,
		.pure-table th:first-child {
		    border-left-width: 0;
		}

		.pure-table thead {
		    background-color: #dadada;
		    color: #000;
		    text-align: left;
		    vertical-align: bottom;
		}

		.pure-table td {
		    background-color: transparent;
		}

		.pure-table-striped tr:nth-child(2n+1) td {
		    background-color: #f2f2f2;
		}

		/**/

		.pure-table tr:hover td
		{
			background-color: #e2e2e2;
		}
		
		.pure-table, h1
		{
			margin: auto;
		}

		*
		{
			text-align: center;
			font-family: 'Dosis', sans-serif !important;
		}
	</style>
</head>
<body>
	<table class="pure-table pure-table-striped">
		<thead>
			<?php print_row(["Jméno", "Příjmení", "Přezdívka", "Pohlaví", "Směr příjezdu"], TRUE); ?>
		</thead>
		<tbody>
			<?php
				foreach($u as $ucastnik)
				{
					print_row($ucastnik);
				}
			?>
		</tbody>
	</table>
</body>
</html>

