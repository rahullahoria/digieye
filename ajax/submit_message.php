<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
if($email != ""){
	$emailMessage = $name ."(".$email.")\n
		Wants to know: ".$subject."\n
		Message: ".$message."\n
		\n
		This message is send by Digieye (http://digieye.shatkonlabs.com)'\n
		Go green and Hava PEACE";
	$emailSubject = $name." want to know '".$subject."'";

	if(mail("rahul_lahoria@yahoo.com",$emailSubject,$emailMessage)){
		//$command = "php -f sendToOthers.php ";
		//echo $command;

		//exec( "$command", $arrOutput );
		//echo shell_exec($command);
		echo "Thank you for contecting us, We will come back in next 24 hours!";
    }
    else{
            echo "Message sending Failed";
            }
} else echo "Plz enter Email ID";


?>