<!DOCTYPE HTML>
<!-- Jeremy De La Cruz -->
<html>
	<head>
		<title>
			Login 
		</title>
		<link type="text/css" rel="stylesheet" href="styling.css" />
	</head>

	<body>
		<div style="text-align:center;">
			<br /><br />
			<span>
				<a href = "index.php" title = "Home Page">
					Home
				</a>
			</span>
			<span style="text-shadow:none;color:gray;text-shadow:0 0 20px black;"  title="You're already here">
				Log in / Sign up
			</span>
			<span>
				<a href="game.php" title="Play the game">
					Play
				</a>
			</span>
			<span>
				<a href="credits.php" title="A tribute to all who helped make it happen">
					Credits
				</a>
			</span>
			<div style = "padding-top:1.5cm">
				<img src = "images/The-Legend-of-the-Kingsl.png" />
			</div>
			<h1 style = "padding-top:0cm"> 
				Log in to Your Profile
			</h1>
			<form id = "userform" method = "post" action = "index.php">
				Username: <input type = "text" name = "uname" /><br />
				Password: <input type = "password" name = "pword" /><br />
				<input type = "submit" value = "Log in"/><br /><br /></form>
			<h1 style = "padding-top:0cm"> 
				Or Create One
			</h1>
			<form id = "registerform" method = "post" action = "confirmation.php">
				First Name: <input type = "text" name = "fname" /><br />
				Last Name: <input type = "text" name = "lname" /><br />
				Email: <input type = "text" name = "email" /><br />
				Username: <input type = "text" name = "uname" /><br />
				Password: <input type = "text" name = "pword" /><br />
				<input type = "submit" value = "Sign up"/><br /><br /></form>
		</div>
		
	</body>
</html>