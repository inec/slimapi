<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client ;
$client = new Client(['base_uri' =>'http://jsonplaceholder.typicode.com/']);

$response =$client->request(
    'POST',
	'posts'	,
	[ 
		'json' => [
    	'title' => 'Guzzel Reffst',
    	'body' => 'Guzzzle makd REST easy',
    	'userId' =>2,

		]
	]
);

var_dump($response);
echo $response->getBody();