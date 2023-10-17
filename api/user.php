
<?php
header("Access-Control-Allow-Origin: http://localhost:8102");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


require "database.php";

$query = "SELECT tc.short_name FROM tb_cliente tc WHERE tc.estado='1' LIMIT 10 ;"; // Agregamos el punto y coma al final de la línea

if ($is_query_run = mysqli_query($conn, $query)) {
    $userData = [];
    while ($query_executed = mysqli_fetch_assoc($is_query_run)) {
        $userData[] = $query_executed;
    }
} else {
    echo "Error en la ejecución de la consulta!";
}

echo json_encode($userData);
?>
