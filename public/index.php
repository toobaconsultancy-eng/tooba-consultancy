<?php
/**
 * Tooba Consultancy - Hostinger Web Hosting Fallback
 * Ensures the homepage loads even if the server defaults to index.php
 */
if (file_exists(__DIR__ . '/index.html')) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile(__DIR__ . '/index.html');
    exit;
}
?>
