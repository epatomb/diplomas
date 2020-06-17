<?php
//include "../php/lib/fpdf/fpdf.php";
//echo "hola";
setlocale(LC_TIME,"es_EC.UTF-8","es_EC");
date_default_timezone_set('America/Guayaquil');
$nombre=$_POST['nombresp'];
$curso=$_POST['cursop'];
$fecha=date("j F Y");
//echo $fecha;
require('../php/lib/fpdf/fpdf.php');

$pdf = new FPDF('L','pt','A4'); 

//Loading data 
$pdf->SetTopMargin(20); $pdf->SetLeftMargin(20); $pdf->SetRightMargin(20); 

$pdf->AddPage(); 
$pdf->Image('../php/lib/fpdf/PlantillasDiplomas/1.jpg' , 0 ,0, 825, 600);
$pdf->SetFont('Arial','B',34); 
$pdf->SetXY(320,220); 
$pdf->Cell(120,175,utf8_decode($nombre)); 
$pdf->SetFont('Arial','B',28);
$pdf->SetXY(260,320); 
$pdf->Cell(120,175,utf8_decode($curso)); 
$pdf->SetFont('Arial','B',20);
$pdf->SetXY(500,530); 
$lugarf="Quito, {$fecha}";
$pdf->Cell(0,0,utf8_decode($lugarf));
$pdf->Output('D','diplomaPrimariaCLP.pdf');
//header("Location:../index.html#seccion-primaria");
?>