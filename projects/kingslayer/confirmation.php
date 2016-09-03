<?php
	session_start();
	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$uname = $_POST['uname'];
	$pword = $_POST['pword'];


	function ifUNameTaken()//if username is taken
	{
		global $conn;
		$cmd = "SELECT uname FROM users WHERE uname='".$_POST["uname"]."'";
		$result = $conn->prepare($cmd);
		$result->execute();
		$info = $result->fetch();
		
		if (isset($info) && $info["uName"] == $_POST["uname"])
		{
			return "That username is taken. Try another one.";
		}
		
		return null;
	}
	
	function ifValidUName()//if valid username
	{
		if (preg_match("[[^0-9a-zA-z]]", $_POST["uname"]))
		{
			return "Invalid username; only use letters and numbers for your username.";
		}
		
		return null;
	}
	
	function ifValidPWord()//if valid password
	{
		if (preg_match("[[^0-9a-zA-z]]", $_POST["pword"]))
		{
			return "Invalid password; only use letters and numbers for your password.";
		}
		
		return null;
	}

	$hostname = $_SESSION["host"];
	$dbname = $_SESSION["dbase"];
	$username = $_SESSION["un"];
	$password = $_SESSION["pw"];

	$conn = new PDO("mysql:host=".$hostname.";dbname=".$dbname, $username, $password);
	
	$headerMsg = "Location: login.php?msg=";
	
	$temp = ifUNameTaken();
	if (isset($temp))
	{
		$headerMsg.=$temp."; ";
	}
		
	$tmp = ifValidUName();
	if (isset($temp))
	{
		$headerMsg.=$temp."; ";
	}
	
	$tmp = ifValidPWord();
	if (isset($temp))
	{
		$headerMsg.=$temp."; ";
	}

	if (preg_match("[;]", $headerMsg))
	{
		header($headerMsg);
	}
	else
	{	
		$cmd = "INSERT INTO logins (fName, lName, email, uName, pWord) VALUES ('$fname', '$lname', '$email', '$uname', '$pword');";
		$conn->query($cmd);
		
		header("Location: index.php");
	}
?>
<!-- Jeremy De La Cruz -->