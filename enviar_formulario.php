<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $instagram = $_POST["instagram"];
    $comprovante = $_FILES["comprovante"]["name"];

    $to = "leticiaescobaraujo@gmail.com"; // Insira o endereço de e-mail para onde deseja enviar os dados
    $subject = "Novo pedido de compra";
    $message = "Nome: " . $nome . "\n";
    $message .= "E-mail: " . $email . "\n";
    $message .= "Perfil do Instagram ou número do WhatsApp: " . $instagram . "\n";
    $message .= "Comprovante de Pagamento (PIX): " . $comprovante . "\n";

    // Envie o e-mail
    mail($to, $subject, $message);

    // Redirecione para uma página de confirmação
    header("Location: confirmacao.html");
    exit;
}
?>
