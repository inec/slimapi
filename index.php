<?php

require 'vendor/autoload.php';

$app = new \Slim\App();
// Define app routes
$app->get('/message', function ($request, $response, $args) {
    return $response->write("This is our messages ");
});

// Run app
$app->run();