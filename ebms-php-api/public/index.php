<?php
require '../config/config.php';

// Simple Router
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

switch ($uri) {
    case '/api/auth/login':
        require '../api/auth.php';
        break;
    case '/api/invoices':
        if ($method === 'GET') {
            require '../api/get_invoices.php';
        } elseif ($method === 'POST') {
            require '../api/create_invoice.php';
        }
        break;
    case (preg_match('/^\/api\/invoices\/[0-9]+$/', $uri) ? true : false):
        require '../api/get_invoice.php';
        break;
    case '/api/stock':
        if ($method === 'GET') {
            require '../api/get_stock.php';
        } elseif ($method === 'POST') {
            require '../api/create_stock.php';
        }
        break;
    case (preg_match('/^\/api\/stock\/[0-9]+$/', $uri) ? true : false):
        require '../api/get_stock_item.php';
        break;
    default:
        http_response_code(404);
        echo json_encode(["error" => "Endpoint not found"]);
        break;
}
