<?php
header('Content-Type: application/json');
echo json_encode(["invoice" => ["id" => 1, "amount" => 1500, "customer" => "John Doe", "status" => "success", "electronicSignature" => "abc123signature"]]);
