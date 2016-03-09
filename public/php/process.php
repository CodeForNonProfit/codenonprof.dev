

<?php
var_dump("test");
$myemail = 'hollyanbryant@gmail.com';

if (isset($_POST['name'])) {
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);
$nominate = strip_tags($_POST['nominate']);
echo "<span class=\"alert alert-sucess\" >Your message has been received. Thank you!</span>";

$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have receieved a new message.".
" Here are the details:\n $message".
"Email: $email\n Message \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email";
mail($to, $email_subject, $email_body,$headers);	
}
?>