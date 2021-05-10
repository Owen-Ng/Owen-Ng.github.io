<?php


$filename = $_FILES['file']['name'];

$pathname = $_REQUEST['pathname'];
$sheetname = $_REQUEST['sheetname'];
$pdfname = $_REQUEST['pdfname'];
$date = $_REQUEST['date']; 

$location = "uploads/".$filename;

if (move_uploaded_file($_FILES['file']['tmp_name'], $location)){
    echo shell_exec("python3 receiptconvert.py ./uploads/Sales_2020.xlsx 'October 17, 2020' Test 2020");
    // echo shell_exec();

    // echo $pathname;
}else{
    echo 0;
}
?>