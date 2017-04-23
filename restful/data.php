<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client ;
$client = ne
$response =$client->request(
    'POST',

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


