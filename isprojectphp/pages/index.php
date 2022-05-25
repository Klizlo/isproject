<?php
    include_once '../classes/REST/Read.php';

    $readFile = new Read();
    $data = $readFile->getData();

    foreach ($data as $d => $value) {
        echo $d;
    }
?>