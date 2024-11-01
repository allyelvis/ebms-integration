<?php
// Load environment variables
$env = parse_ini_file(__DIR__ . '/.env');

// Set configuration values
define('EBMS_API_URL', $env['EBMS_API_URL']);
define('EBMS_USERNAME', $env['EBMS_USERNAME']);
define('EBMS_PASSWORD', $env['EBMS_PASSWORD']);
