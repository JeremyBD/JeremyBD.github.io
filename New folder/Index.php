<!DOCTYPE HTML>
<!--Matyas Fenyves-->
<html>
	<head>
		<title>Whack-a-Troll</title>
		<style>
			div.Rules
			{
				margin-right: 10% ;
				margin-left: 10% ;
				text-align: justify ;
				font-size: 15pt ;
			}
			b
			{
				text-align: center ;
				font-size: 15pt ;
			}
			body
			{
				text-align: center ;
				background-color: #66FFCC ;
			}
			button
			{
				width: 125px ;
				height: 80px ;
				font-size: 40pt ;
				background-color: #CC99FF ;
				border-color: #CC99FF ;
			}
			table
			{
				margin: auto ;
			}
			h1
			{
				font-size: 50pt ;
			}
			h2
			{
				font-size: 30pt ;
			}
			h3
			{
				font-size: 25pt ;
			}
			h4
			{
				font-size: 15pt ;
			}
			a#ricktroll
			{
				color: #66FFCC ;
			}
		</style>
		<script>
			
		</script>
	</head>
	<?php
		$email = $_POST['email'];
		$password = $_POST['password'];
		$hostname = "localhost" ;
		$dbname = "whack-a-troll" ;
		$uname = "root" ;
		$pword = "" ;
		$conn = new PDO("mysql:host=".$hostname.";dbname=".$dbname, $uname, $pword) ;
		$cmd = "SELECT username FROM accounts WHERE email LIKE '$email' ;" ;
		$statement = $conn->prepare($cmd) ;
		$signedIn = $statement->execute() ;
		$currentuser = $statement->fetchAll() ;
		if($currentuser == null)
			$currentuser[0][0] = "guest" ;
	?>
	<body>
		<audio preload = "auto" loop autoplay>
			<source src="The Alan Parsons Project - I Wouldn't Want To Be Like You.m4a" type="audio/mpeg" autoplay = "true">
		</audio>
		<h1>Whack-a-Troll</h1>
		<h2>A game of speed and not much intelligence.</h2>
		<h3>Current User: <?php echo $currentuser[0][0] ; ?> </h3>
		<a id = "ricktroll" href = "Rick Troll.html"><img src = "dancing-troll.gif" /></a>
		<a href = "Log In.html"><h4>Log In/Register</h4></a>
		<hr /><br />
		<!--Rules-->
		<b>Game Rules:</b> <br />
		<div class = "Rules">
			The object of the game is to hit all of the Trolls you see on screen with the mouse. 
			You cannot let the Trolls take over your page. They will keep coming for a time until they are demoralized. 
			They will come faster and with stronger Trolls as you progress through levels. If you let too many Trolls onto your screen, 
			you lose. You will be timed for how long you last in each round. Your time will contribute to your score. 
			You need a high enough score to progress to the next round.
		</div>
		<br />
		<hr />
		<h3>Level Select</h3>
		<div class = "Levels">
			<table>
				<tr>
					<td><a href = "Level 1.html"><button>1</button></a></td>
					<td><a href = "Level 2.html"><button>2</button></a></td>
					<td><a href = "Level 3.html"><button>3</button></a></td>
					<td><a href = "Level 4.html"><button>4</button></a></td>
					<td><a href = "Level 5.html"><button>5</button></a></td>
				</tr>
				<tr>
					<td><a href = "Level 6.html"><button>6</button></a></td>
					<td><a href = "Level 7.html"><button>7</button></a></td>
					<td><a href = "Level 8.html"><button>8</button></a></td>
					<td><a href = "Level 9.html"><button>9</button></a></td>
					<td><a href = "Level 10.html"><button>10</button></a></td>
				</tr>
				<tr>
					<td><a href = "Level 11.html"><button>11</button></a></td>
					<td><a href = "Level 12.html"><button>12</button></a></td>
					<td><a href = "Level 13.html"><button>13</button></a></td>
					<td><a href = "Level 14.html"><button>14</button></a></td>
					<td><a href = "Level 15.html"><button>15</button></a></td>
				</tr>
				<tr>
					<td><a href = "Level 16.html"><button>16</button></a></td>
					<td><a href = "Level 17.html"><button>17</button></a></td>
					<td><a href = "Level 18.html"><button>18</button></a></td>
					<td><a href = "Level 19.html"><button>19</button></a></td>
					<td><a href = "Level 20.html"><button>20</button></a></td>
				</tr>
			</table>
		</div>
		<br />
		<hr />
		<br />
		<div class = "Comments">
			Leave comments on our 
			<a href = "Comments.php">Comments</a> 
			Page
		</div>
		<br />
		<span>Created By: Matyas Fenyves</span>
	</body>
</html>