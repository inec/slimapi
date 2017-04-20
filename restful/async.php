<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client ;
use GuzzleHttp\Psr7\Response ;
use GuzzleHttp\Exception\RequestException ;

$client = new Client(['base_uri' =>'http://jsonplaceholder.typicode.com/']);

$promise =$client->requestAsync(
    'GET',
	'posts/1'
);

$promise -> then(
		function (Response $resp)
		{
			echo $resp->getBody();
		},
		function (RequestException $re){
			echo $e->getMessage();
		}
);