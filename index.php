<?php

  if(isset($_POST['submit'])){
      $name=$_POST['name'];
      $email=$_POST['email'];
      $msg=$_POST['msg'];

      $to="garojizmejian@gmail.com";
      $subject="form sub";
      $message="Name: ".$name."\n"."email: ".$email."\n". "Wrote: "."\n\n".$msg;
      $headers="Form: ".$email;

      if(mail($to,$subject, $message, $headers)){
          echo "<h1 style='font-family: Roboto; text-align:center ; font-size: 24px; margin-top:20px; color: black'>Thank you 
          <span style='color: #febd01'>".$name." </span> ,we recieved
           your request and we will contact you as soon as possible</h1>";
           include_once("index.html");
      }
      else{
          echo "Sorry, an error occurred , please try again";
      }
  }

?>