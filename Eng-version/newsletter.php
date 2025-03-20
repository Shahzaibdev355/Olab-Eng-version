




<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];

  $to = 'gestion@olabgroup.fr';
  $subject = 'Mail From ÒLAB GROUP';
  $body = "Email: $email";

  // Set a valid From address
  $from = 'gestion@olabgroup.fr';

  // Set headers
  $headers = "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

  // Use headers in the mail function
  if (mail($to, $subject, $body, $headers)) {
    echo 'Email sent successfully.';
  } else {
    echo 'Failed to send the email.';
  }
}
?>
