<?php
require 'vendor\autoload.php';

use GuzzleHttp\Client;

$Clent = new Client();

$response =$client->request(
'Get', 
'http://jsonplaceholder.typicode.com/posts/1'
	);