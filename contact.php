<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Validate and sanitize input
  $fname = filter_input(INPUT_POST, 'fname', FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
  $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

  if ($fname && $email && $message) {
    $to = 'gestion@olabgroup.fr';
    $subject = 'Mail From ÒLAB GROUP';
    $body = "Name: $fname\nEmail: $email\nMessage: $message";

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
  } else {
    echo 'Invalid input. Please provide a valid name, email, and message.';
  }
}
?>
