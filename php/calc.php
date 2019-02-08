<?php
$summn=$_POST['summ'];
$daysn=31;
$percent=0.1;
$daysy=365; 
if(isset($_POST["radio4"]))
{
$summ = $summn-1 + ($summn - 1) * $daysn * ($percent / $daysy);	
}
else
{
$summ = $summn-1 + ($summn - 1 + $summadd) * $daysn * ($percent / $daysy);
}
?>