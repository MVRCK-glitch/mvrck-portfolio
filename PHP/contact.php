<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "portfolio_db";

// connect to database
$conn = new mysqli($host, $user, $password, $dbname);

// check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// get form data
$name = $_POST['name'];
$message = $_POST['message'];

// insert into database
$sql = "INSERT INTO contacts (name, message) VALUES ('$name', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $conn->error;
}

// close connection
$conn->close();
?>