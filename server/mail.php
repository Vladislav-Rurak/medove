<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_log("POST data: " . print_r($_POST, true));

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';

    error_log("Name: $name, Email: $email");

    $to = 'medovehoney@gmail.com';
    $subject = 'New purchase request';
    $message = 'Name: ' . $name . "\n" . 'E-mail: ' . $email . "\n";
    $headers = 'From: medove.com.ua' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Your request has been successfully sent';
    } else {
        echo 'Error sending a request.';
    }
}
?>
