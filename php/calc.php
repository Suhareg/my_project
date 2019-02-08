<?php
if(isset($_POST["radio4"]))
{
$summn = $summn-1 + ($summn - 1) * $daysn * ($percent / $daysy);	
}
else
{
$summn = $summn-1 + ($summn - 1 + $summadd) * $daysn * ($percent / $daysy);
}
?>