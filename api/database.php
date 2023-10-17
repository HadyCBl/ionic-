<?php
header("Access-Control-Allow-Origin: http://localhost:8100");

$servername = "75.102.22.34";
$username = "clhpzzvb_practicante";
$password = "]iO@X&!85uTe";
$database = "clhpzzvb_bd_coope_fape";

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

?>