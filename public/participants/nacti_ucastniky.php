<?php
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache"); // HTTP/1.0
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

function nacti_ucastniky()
{
	$f = fopen("https://docs.google.com/spreadsheets/d/1csj_zhlyCg93jSykyZzIg7lMX4rfZjoa0hFqAs5lsos/pub?gid=1531176211&single=true&output=csv", "r");
	//fgetcsv($f); // skip hlaviček
	$u = array();
	while (($data = fgetcsv($f)) !== FALSE) {
		$u[] = $data;
	}
	return $u;
}

function pocet_ucastniku($u)
{
	$celkem = count($u);
	$muzi = array_reduce($u, function($a,$uc){ return $a + ($uc[3] == "Muž" ? 1 : 0); }, 0);
	$zeny = $celkem - $muzi;
	return array("celkem"=>$celkem, "muzi"=>$muzi, "zeny"=>$zeny, "je_vincena_muz" => FALSE, "je_stefanova_muz" => TRUE);
}