<?php

require 'vendor/autoload.php';
$app = new \Slim\App();
$app->get('/api/person', function ($request, $response, $args) {
    
     $payload=[];
   array_push($payload, array("name"=>"Bob"  ,"birth-year"=>1993));
   array_push($payload, array("name"=>"Alice","birth-year"=>1995));

    return $response->withStatus(200)->withJson($payload);
});

$app->run();