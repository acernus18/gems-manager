<?php session_start();

use GemsManager\Controller\HealthController;
use GemsManager\Controller\PassportController;
use GemsManager\Controller\SearchController;

require_once "vendor/autoload.php";

if (preg_match("/^\/api\/(.+?)\/([^?]+)\??.*$/", $_SERVER["REQUEST_URI"], $matches)) {
    $controller = $matches[1];
    $method = $matches[2];

    $invoker = null;
    switch ($controller) {
        case "health":
            $invoker = new HealthController();
            break;
        case "search":
            $invoker = new SearchController();
            break;
        case "passport":
            $invoker = new PassportController();
            break;
        default:
            break;
    }

    if ($invoker !== null && method_exists($invoker, $method)) {
        header("Content-Type: application/json");
        echo json_encode($invoker->$method());
    } else {
        http_response_code(404);
    }
} else {
    http_response_code(404);
}