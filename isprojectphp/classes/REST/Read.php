<?php
    class Read 
    {
        private $data;

        function __construct(){
            $response1 = file_get_contents('localhost:8090/games');
            $this->data = json_decode($response1);
        }

        function getData(){
            return $this->data;
        }
    }
    
?>