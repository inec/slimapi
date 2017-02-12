<?php

require 'vendor/autoload.php';

$app = new \Slim\App();
// Define app routes
$app->get('/message', function ($request, $response, $args) {
    return $response->write("Hello ");
});

// Run app
$app->run();