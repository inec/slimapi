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

$promise2 =$client->requestAsync(
    'GET',
	'posts/2'
);

$promises=[$promise,$promise2];

$result = GuzzleHttp\Promise\settle($promises)->wait();