<?php
header("Access-Control-Allow-Origin: http://localhost:8100");

$servername = "";
$username = "";
$password = "";
$database = "";

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

?>
