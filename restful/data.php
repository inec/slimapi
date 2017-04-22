<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client ;
$client = new Client(['base_uri' =>'http://jsonplaceholder.typicode.com/']);

$response =$client->request(
    'POST',
	'posts'	,
	[ 
		'json' => [
    	'title' => 'Guzzel Rest',
    	'body' => 'Guzzzle make REST easy',
    	'userId' =>2,

		]
	]
);

var_dump($response);
echo $response->getBody();


$response =$client->get('http://httpbin.org/ip'	);
var_dump($response);
echo $response->getBody();