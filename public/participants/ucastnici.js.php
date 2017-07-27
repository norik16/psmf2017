<?php
include("nacti_ucastniky.php");
header("Content-Type: application/javascript");
$u = nacti_ucastniky();
$p = pocet_ucastniku($u);
?>
var ucastnici = <?= json_encode($u) ?>;
var pocty = <?= json_encode($p) ?>;
ready(function(){
	udelej_hygienometr(pocty);
	udelej_wordcloud(ucastnici);
	if(pocty.je_vincena_muz) alert("wow");
});
