<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client ;

$client = new Client();


$response =$client->request(
'Get', 
'http://jsonplaceholder.typicode.com/posts/1'
	);

var_dump($response);
echo $response->getBody();