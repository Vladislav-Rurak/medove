<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверка получения данных
    error_log("POST data: " . print_r($_POST, true));

    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';

    // Проверка переменных
    error_log("Name: $name, Phone: $phone");

    $to = 'medovehoney@gmail.com';
    $subject = 'Новый запрос на покупку';
    $message = 'Имя: ' . $name . "\n" . 'Телефон: ' . $phone . "\n";
    $headers = 'From: medove.com.ua' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Ваш запрос успешно отправлен!';
    } else {
        echo 'Ошибка при отправке запроса.';
    }
}
?>
