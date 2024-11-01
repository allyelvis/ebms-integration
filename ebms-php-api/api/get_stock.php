<?php
header('Content-Type: application/json');
echo json_encode(["stockMovements" => [["id" => 1, "product" => "Widget A", "quantity" => 50, "movementType" => "addition", "date" => "2024-11-01"]]]);
