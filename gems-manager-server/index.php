<?php

use GemsManager\Controller\HealthController;

require_once "vendor/autoload.php";

if (preg_match("/^\/api\/(.+?)\/(.+?)\?.*$/", $_SERVER["REQUEST_URI"], $matches)) {
    $controller = $matches[1];
    $method = $matches[2];

    $invoker = null;
    switch ($controller) {
        case "health":
            $invoker = new HealthController();
            break;
        default:
            break;
    }

    if ($invoker !== null) {
        header("Content-Type: application/json");
        echo json_encode($invoker->$method());
    } else {
        http_response_code(404);
    }
} else {
    http_response_code(404);
}