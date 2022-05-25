<?php
    class Read 
    {
        private $data;

        function __construct(){
            $response = file_get_contents('http://localhost:8090/games');
            $this->data = json_decode($response);
        }

        function getData(){
            return $this->data;
        }
    }
    
?>