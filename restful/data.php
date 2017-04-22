<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client ;
$client = new Client(['base_uri' =>'http://jsonplaceholder.typicode.com/']);

$response =$client->request(
    'POST',
	'posts'	,
	[ 
		'body' => 'foo',
		'query'=>[
    	'userId' => 1
		]
	]
);

var_dump($response);
echo $response->getBody();


$response =$client->get('http://httpbin.org/ip'	);
var_dump($response);
echo $response->getBody();