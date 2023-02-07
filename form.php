<?php

echo "Working";

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
   $name = $_POST['name'];
   $phone = $_POST['phone'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid';
   }

   if (empty($message)) {
       $errors[] = 'Message is empty';
   }

   if (empty($errors)) {
       $toEmail = "info@lesawi.co.za";
       $emailSubject = 'New email from your contact form - Lesawi.co.za';
       $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
       $bodyParagraphs = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nPhone: $phone\n\nMessage:\n$message";
    //    $bodyParagraphs = ["Name: {$name}", "Phone {$phone}", "Email: {$email}", "Message:", $message];
       $body = join(PHP_EOL, $bodyParagraphs);

       if (mail($toEmail, $emailSubject, $body, $headers)) 
       header('Location: /sucessPage.js');        
       } else {
           $errorMessage = 'Oops, something went wrong. Please try again later';
       }

   } else {    
       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   }

