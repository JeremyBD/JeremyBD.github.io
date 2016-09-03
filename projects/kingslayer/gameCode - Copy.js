//Jeremy De La Cruz

//starting values
var gameHome = true;
var jumptimes = 0;
var midAir = false;
var posY_preJump;
var posY_postJump;

//moving and jumping checks to deal with multiple key strokes
var jumpKey = false;  
var leftKey = false;  
var rightKey = false; 
var blockKey = false;

//HEALTH REGEN (0.5 HP/SEC ? SLOW)
//ADD NUMERIC HEALTH VALUE

//PLAYER OBJECT
function PLAYER_CHAR(pName, health, currHealth, dmg) 
{
	this.charName = pName;
	this.maxHealth = health;
	this.currentHealth = currHealth;
	this.damage = dmg;

	this.moveRight = 
					function()
					{
						//d - right
						if (jumpKey && rightKey && !blockKey && !leftKey)
						{
							if(jumptimes == 1 && midAir == false)
							{
								var JumpUp;
								var StopJump;
								var Fall;
								midAir = true;
								posY_preJump = positionY;
								JumpUp = setInterval( 
									function()
									{
										positionY -= 3;
										positionX += MOVE_SPEED;
										playerPos();
										midAir = true;
									}, 6);
								
								StopJump = setTimeout( 
									function()
									{
										posY_postJump = positionY;
										clearInterval(JumpUp);
										velocity = 2;
										midAir = true;
									}, 340);
							}
							playerPos();
							checkPlayerBounds();
						}
						else
						{
							checkPlayer();
							if(PlayerFace != WALKING_RIGHT)
							{
								PLAYER.src = WALKING_RIGHT;
							}
							playerPos();
							checkPlayerBounds();
						}
					};
		
	this.moveLeft = 
					function()
					{
						//a - left
						if (jumpKey && leftKey && !blockKey && !rightKey)
						{
							if(jumptimes == 1 && midAir == false)
							{
								var JumpUp;
								var StopJump;
								var Fall;
								midAir = true;
								posY_preJump = positionY;
								JumpUp = setInterval( 
									function()
									{
										positionY -= 3;
										positionX -= MOVE_SPEED;
										playerPos();
										midAir = true;
									}, 6);
								
								StopJump = setTimeout( 
									function()
									{
										posY_postJump = positionY;
										clearInterval(JumpUp);
										velocity = 2;
										midAir = true;
									}, 340);
							}
							playerPos();
							checkPlayerBounds();
						}
						else
						{
							checkPlayer();
							if(PlayerFace != WALKING_LEFT)
							{
								PLAYER.src = WALKING_LEFT;
							}
							playerPos();
							checkPlayerBounds();
						}
					};
		
	this.jump = 
					function()
					{
						//w - jumping
						if(midAir == false)
						{
							jumptimes += 1;
		
							if(jumptimes == 1)
							{	
								var JumpUp;
								var StopJump;
								var Fall;
								midair = true;
								posY_preJump = positionY;
	
								//Making separate functions for each setInterval and setTimeout did not yield optimal results
								JumpUp = setInterval( 
										function()
										{
											positionY -= 3;
											playerPos();
											midAir = true;
										}, 8);
									
								StopJump = setTimeout( 
										function()
										{
											posY_postJump = positionY;
											clearInterval(JumpUp);
											velocity = 2;
											midAir = true;
										}, 340);
								playerPos();		
								checkPlayerBounds();
							}	
						}
					};
		
	this.attack = 
					function()
					{
						//hold space - attack
						checkPlayer();
						if(PlayerFace != ATTACKING_RIGHT && PlayerFace == IDLE_RIGHT) //fix midair attack
						{
							PLAYER.src = ATTACKING_RIGHT;
							positionX -= 41;
							positionY += 3;
							playerPos();
						}
						else
						{
							if(PlayerFace != ATTACKING_LEFT && PlayerFace == IDLE_LEFT)
							{
								PLAYER.src = ATTACKING_LEFT;
								positionX -= 41;
								positionY += 3;
								playerPos();
							}
						}
					};
		
	this.playerblock = 
					function()
					{
						//s - blocking
						checkPlayer();
						if(PlayerFace != BLOCKING_RIGHT && PlayerFace == IDLE_RIGHT)
						{
							PLAYER.src = BLOCKING_RIGHT;
							positionX -= 5;
							//positionY -= 1;
							checkPlayerBounds();
							playerPos();
						}
						else
						{
							if(PlayerFace != BLOCKING_LEFT && PlayerFace == IDLE_LEFT)
							{
								PLAYER.src = BLOCKING_LEFT;
								positionX += 1;
								checkPlayerBounds();
								playerPos();
							}
						}
					};
}

//ENEMY OBJECT
function ENEMY(eName, health, speed, dmg, range) 
{
	this.charName = eName;
	this.maxHealth = health;
	this.movementSpeed = speed;
	this.damage = dmg;
	this.aggroRange = range;

	this.moveRight = function(){};
	this.moveLeft = function(){};
	this.jump = function(){};
	this.attack = function(){};
}

//ENVIRONMENT OBJECT FOR COLLISIONS (using sets of x and y coordinate ranges
function ENVIRONMENT () 
{
	
}

//initialize function
function startGame()
{
	if(gameHome)
	{
		smallRoom = true; //indoors or small outside area with no x-scrolling
	}
	else
	{
		smallRoom = false; //outdoors with x-scrolling
	}
	
	//character model moveset gifs
	IDLE_RIGHT = "images/idleRomanRight.gif";
	IDLE_LEFT = "images/idleRomanLeft.gif";
	WALKING_RIGHT = "images/walkingRomanRight.gif";
	WALKING_LEFT = "images/walkingRomanLeft.gif";
	BLOCKING_RIGHT = "images/blockingRomanRight.gif";
	BLOCKING_LEFT = "images/blockingRomanLeft.gif";
	ATTACKING_RIGHT = "images/attackingRomanRight.gif";
	ATTACKING_LEFT = "images/attackingRomanLeft.gif";
	PLAYER.src = IDLE_RIGHT;
	
	//character starting position and movement speed (maybe add speed potion)
	positionX = 50;
	positionY = 380;
	UNIVERSAL_SPEED = 5;
	MOVE_SPEED = 3.5;
	PLAYER.style.top = positionY + "px";
	PLAYER.style.left = positionX + "px";
	PlayerFace = "";
	
	//ground position
	ground.style.top = "480px";
	
	//player setup
	PLAYER_ONE = new PLAYER_CHAR("Vagabond", 100, 100, 10);
	healthBar.max = PLAYER_ONE.maxHealth;
	healthBar.value = PLAYER_ONE.currentHealth;
	
	//Continuously running interval for gravity, positioning, and boundaries using dynamic velocity
	velocity = 0;
	gravity = -.4;
	setInterval(
		function()
		{
			positionY += velocity;
	
			if(PLAYER_ONE.currentHealth < PLAYER_ONE.maxHealth)
			{
				PLAYER_ONE.currentHealth += 0.02;
				healthBar.value = PLAYER_ONE.currentHealth;
			}
			
			if(velocity != 0)
			{
				velocity = (velocity < 0) ? velocity + gravity : velocity - gravity;
			}
			
			if(rightKey && leftKey)
			{
				rightKey = false;
				leftKey = false;
			}
			
			if(rightKey)
			{
				positionX += MOVE_SPEED;
			}
			
			if(leftKey)
			{
				positionX -= MOVE_SPEED;
			}
			
			if(leftKey && rightKey && jumpKey)
			{
				rightKey = false;
				leftKey = false;
				jumpKey = false;
				midAir = true;
			}
			
			if(velocity == 0)
			{
				midAir = false;
			}
			
			checkPlayerBounds();
			playerPos();
		}, 12);
}

//(REPLACE GIFS WITH LOOPED PNG'S FOR ATTACK ANIMATIONS)

//setting player position using x and y values
function playerPos()
{
	posX = positionX + "px";
	posY = positionY + "px";
	PLAYER.style.top = posY;
	PLAYER.style.left = posX;
}

//checking what the player is currently doing/the state of the player
function checkPlayer()
{
	if(PLAYER.src.slice(PLAYER.src.length-25,PLAYER.src.length) == IDLE_RIGHT)
	{
		PlayerFace = IDLE_RIGHT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-24,PLAYER.src.length) == IDLE_LEFT)
	{
		PlayerFace = IDLE_LEFT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-28,PLAYER.src.length) == WALKING_RIGHT)
	{
		PlayerFace = WALKING_RIGHT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-27,PLAYER.src.length) == WALKING_LEFT)
	{
		PlayerFace = WALKING_LEFT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-29,PLAYER.src.length) == BLOCKING_RIGHT)
	{
		PlayerFace = BLOCKING_RIGHT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-28,PLAYER.src.length) == BLOCKING_LEFT)
	{
		PlayerFace = BLOCKING_LEFT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-30,PLAYER.src.length) == ATTACKING_RIGHT)
	{
		PlayerFace = ATTACKING_RIGHT;
	}
	if(PLAYER.src.slice(PLAYER.src.length-29,PLAYER.src.length) == ATTACKING_LEFT)
	{
		PlayerFace = ATTACKING_LEFT;
	}
}

//checking what buttons are being pressed
function checkKeyPressDown(e)
{
	if (e.which == 65 || e.keyCode == 65)
	{
		PLAYER_ONE.moveLeft();
		leftKey = true;
	}
	else
	{
		if (e.which == 68 || e.keyCode == 68)
		{
			PLAYER_ONE.moveRight();
			rightKey = true;
		}
	}
	if (e.which == 32 || e.keyCode == 32)
	{
		PLAYER_ONE.attack();
	}
	if (e.which == 83 || e.keyCode == 83)
	{
		PLAYER_ONE.playerblock();
		blockKey = true;
	}
	if (e.which == 87 || e.keyCode == 87)
	{
		PLAYER_ONE.jump();
		jumpKey = true;
	}
}

//checking what buttons are being released and setting player face back to idle
function checkKeyPressUp(e)
{
	checkPlayer();
	if (e.which == 65 || e.keyCode == 65 || e.which == 68 || e.keyCode == 68 || e.which == 83 || e.keyCode == 83 || e.which == 32 || e.keyCode == 32)
	{
		if(PlayerFace == WALKING_RIGHT)
		{
			PLAYER.src = IDLE_RIGHT;
			rightKey = false;
		}
		else
		{
			if(PlayerFace == WALKING_LEFT)
			{
				PLAYER.src = IDLE_LEFT;
				leftKey = false;
			}
			else
			{
				if(PlayerFace == BLOCKING_LEFT)
				{
					PLAYER.src = IDLE_LEFT;
					blockKey = false;
					//positionY += 1;
					positionX -= 1;
					playerPos();
				}
				else
				{
					if(PlayerFace == BLOCKING_RIGHT)
					{
						PLAYER.src = IDLE_RIGHT;
						blockKey = false;
						//positionY += 1;
						positionX += 5;
						playerPos();
					}
					else
					{
						if(PlayerFace == ATTACKING_LEFT)
						{
							PLAYER.src = IDLE_LEFT;
							positionX += 41;
							playerPos();
						}
						else
						{
							if(PlayerFace == ATTACKING_RIGHT)
							{
								PLAYER.src = IDLE_RIGHT;
								positionX += 41;
								playerPos();
							}
						}
					}
				}
			}
		}
	}
}

//setting up player boundaries for the screen (I need to edit it to accommodate x-direction movement and allow scrolling while keeping the character in view)
function checkPlayerBounds()
{
	if(velocity > 0)
	{
		jumptimes = 0;
	}
	
	if(smallRoom)
	{
		if(positionY >= 380)
		{
			positionY = 380;
			jumptimes = 0;
			velocity = 0;
		}
		else
		{
			jumptimes = 1;
		}
		
		if(positionX <= 20)
		{
			positionX = 20;
		}
		
		if(positionX >= 700)
		{               
			positionX = 700;
		}
	}
	else
	{
		if(positionY >= 380)
		{
			positionY = 380;
			jumptimes = 0;
			velocity = 0;
		}
		
		if(positionX <= 50 && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
		{
			positionX = 50;
		}
		
		if(positionX >= 500 && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
		{
			positionX = 500;
		}
	}
}