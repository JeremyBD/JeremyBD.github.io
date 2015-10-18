//ENGINE ------------------------------------------------------------------------------------------------------------------

//starting values
var normalBounds = true; //normal boundaries (wide)

var jumptimes = 0;
var midAir = false;
var attack = false;
var PLAYER_ONE = null;
var GAME_RUNNING = true;
var deaths = 0;
var areaKills = 0;

var positionX = 50;
var positionY = 380;
var UNIVERSAL_SPEED = 5;
var MOVE_SPEED = 3.5;

//boundary values
var verticalBound = 380;
var wideLeftBound = 20;
var wideRightBound = 700;
var smallLeftBound = 50;
var smallRightBound = 500;

var TOTAL_AREA_COUNT = 3;
var TOTAL_WORLD_COUNT = 5;

//Player images and animations
var IDLE_RIGHT = "images/Player/Idle/idleRomanRight.gif";
var IDLE_LEFT = "images/Player/Idle/idleRomanLeft.gif";
var WALKING_RIGHT = "images/Player/Movement/walkingRomanRight.gif";
var WALKING_LEFT = "images/Player/Movement/walkingRomanLeft.gif";
var BLOCKING_RIGHT = "images/Player/Block/blockingRomanRight.gif";
var BLOCKING_LEFT = "images/Player/Block/blockingRomanLeft.gif";
var ATTACKING_RIGHT = "images/Player/Attack/attackingRomanRightFrames.gif";
var ATTACKING_LEFT = "images/Player/Attack/attackingRomanLeftFrames.gif";

var TOMBSTONE = "Assets/grave.png";

var currentSpeaker = "";
var inDialogue = false;
var lastDialogue = false;

//NPC AND ENEMY ANIMATIONS AND IMAGES--------------------------------------------------
//NPCs
	//HUNTER
var IDLE_HUNTER = "images/NPCs/Hunter/idleHunter.gif";
	//SORCERER
var IDLE_SORCERER = "images/NPCs/Sorcerer/sorcererSitting.gif";
	//SWORDSMAN
	//KNIGHT
	//GUARD
var IDLE_GUARD = "images/NPCs/Temple Knight/idleTempleKnight.gif";
//ENEMIES
	//BANDIT PEASANT
var IDLE_BANDIT_PEASANT_LEFT = "images/Enemies/Bandit/Peasant/idleWarriorLeft.gif";
var IDLE_BANDIT_PEASANT_RIGHT = "images/Enemies/Bandit/Peasant/idleWarriorRight.gif";
var MOVING_BANDIT_PEASANT_LEFT = "images/Enemies/Bandit/Peasant/movingWarriorLeft.gif";
var MOVING_BANDIT_PEASANT_RIGHT = "images/Enemies/Bandit/Peasant/movingWarriorRight.gif";
var ATTACKING_BANDIT_PEASANT_LEFT = "images/Enemies/Bandit/Peasant/attackingWarriorLeft.gif";
var ATTACKING_BANDIT_PEASANT_RIGHT = "images/Enemies/Bandit/Peasant/attackingWarriorRight.gif";
	//BANDIT BUTCHER
var IDLE_BANDIT_BUTCHER_LEFT = "images/Enemies/Bandit/Barbarian/idleBarbarianLeft.gif";
var IDLE_BANDIT_BUTCHER_RIGHT = "images/Enemies/Bandit/Barbarian/idleBarbarianRight.gif";
var MOVING_BANDIT_BUTCHER_LEFT = "images/Enemies/Bandit/Barbarian/walkingBarbarianLeft.gif";
var MOVING_BANDIT_BUTCHER_RIGHT = "images/Enemies/Bandit/Barbarian/walkingBarbarianRight.gif";
var ATTACKING_BANDIT_BUTCHER_LEFT = "images/Enemies/Bandit/Barbarian/attackingBarbarianLeft.gif";
var ATTACKING_BANDIT_BUTCHER_RIGHT = "images/Enemies/Bandit/Barbarian/attackingBarbarianRight.gif";

var NPCS = []; //friendly or neutral characters the player may encounter and interact with
var NPCimages = [];
var ENEMIES = []; //hostile enemy characters
var ENEMYimages = [];
var ENEMYhealthBars = [];
var ENV_OBJECTS = []; //environment objects such as checkpoints and platforms
var ITEM_OBJECTS = []; //items player can pick up ------------------------------------maybe make HP regen a paid upgrade (0.015)

//moveset checks to deal with multiple key strokes
var jumpKey = false;  
var leftKey = false;  
var rightKey = false; 
var blockKey = false;
var attackKey = false;

//HEALTH REGEN (0.1 HP/SEC ? SLOW)
//ADD NUMERIC HEALTH VALUE
//FOR PLATFORMS, WHEN VELOCITY = 0 AFTER HITTING AN OBJECT'S Y-BOUNDARY, SET THAT Y-VALUE TO BE THE BASE Y-VALUE



//LOADING SCREEN IN WHICH ALL IMAGES ARE LOADED BEHIND A BLACK LOADING SCREEN AND THEN HIDDEN

//MENU SCREEN WHERE ONE CAN CHOOSE NEW GAME OR LOAD GAME (NEW GAME ALTERING TABLE)



//PLAYER OBJECT
function PLAYER_CHAR(pName, coin, health, currHealth, regenerateHP, dmg, idleW, walkW, attackW, blockW, normalH, blockH) 
{
	this.charName = pName;
	this.maxHealth = health;
	this.currentHealth = currHealth;
	this.HPregen = regenerateHP;
	this.damage = dmg;
	this.gold = coin;
	this.win = false;
	
	this.xCoord = positionX;
	this.yCoord = positionY;
	this.idleWidth = idleW;
	this.walkWidth = walkW;
	this.attackWidth = attackW;
	this.blockWidth = blockW;
	this.normalHeight = normalH;
	this.blockHeight = blockH;
	
	this.addGold =
					function(howMany)
					{
						this.gold += howMany;
						currency.innerHTML = this.gold;
						PLAYER_ONE.currentHealth+=30;
						health.innerHTML = parseInt(PLAYER_ONE.currentHealth);
					}			
	
	this.getRight = 
					function()		
					{
						return this.xCoord + this.walkWidth;
					}
					
	this.getBottom =
					function()		
					{
						return this.yCoord + this.normalHeight;
					}
	
	this.hasCollision =
					function(thing)
					{
						if (this.getRight() < thing.xCoord - thing.aggroRange ||
							this.xCoord - thing.aggroRange > thing.getRight() ||
							this.getBottom() < thing.yCoord ||
							this.yCoord > thing.getBottom())
						{
							return false;
						}
						else
						{
							return true;
						}
					}
					
	this.checkPlayer = 
					function()
					{
						if(PLAYER.src.slice(PLAYER.src.length-37,PLAYER.src.length) == IDLE_RIGHT)
						{
							PlayerFace = IDLE_RIGHT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-36,PLAYER.src.length) == IDLE_LEFT)
						{
							PlayerFace = IDLE_LEFT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-44,PLAYER.src.length) == WALKING_RIGHT)
						{
							PlayerFace = WALKING_RIGHT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-43,PLAYER.src.length) == WALKING_LEFT)
						{
							PlayerFace = WALKING_LEFT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-42,PLAYER.src.length) == BLOCKING_RIGHT)
						{
							PlayerFace = BLOCKING_RIGHT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-41,PLAYER.src.length) == BLOCKING_LEFT)
						{
							PlayerFace = BLOCKING_LEFT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-50,PLAYER.src.length) == ATTACKING_RIGHT)
						{
							PlayerFace = ATTACKING_RIGHT;
						}
						if(PLAYER.src.slice(PLAYER.src.length-49,PLAYER.src.length) == ATTACKING_LEFT)
						{
							PlayerFace = ATTACKING_LEFT;
						}
					}
	
	this.checkStatus = 
					function()
					{
						if(this.currentHealth <= 0)
						{
							//revertToCheckpoint();
							deaths++;
							if(deaths == 1)
							{
								GAME_RUNNING = false;
								inDialogue = true;
								GAME_MENU.style.display = "block";
								ground.style.opacity = "0";
								newGameAlert = document.createElement("div");
								newGameAlert.id = "promptplayername";
								newGameAlert.innerHTML = 'You Died.';
								GAME_MENU.appendChild(newGameAlert);
								confirmSpeechBtn = document.createElement("button");
								confirmSpeechBtn.id = "confirmspeechbtn";
								confirmSpeechBtn.innerHTML = "Start Over";
								confirmSpeechBtn.setAttribute("onclick", "window.location = 'game.html'");
								GAME_MENU.appendChild(confirmSpeechBtn);
							}
						}
						else
						{
							if(this.win)
							{
								GAME_RUNNING = false;
								inDialogue = true;
								GAME_MENU.style.display = "block";
								ground.style.opacity = "0";
								newGameAlert = document.createElement("div");
								newGameAlert.id = "promptplayername";
								newGameAlert.innerHTML = 'You Won!<br /> You are the new monarch, King <b id = "misc">' + this.charName + '</b>!';
								GAME_MENU.appendChild(newGameAlert);
								confirmSpeechBtn = document.createElement("button");
								confirmSpeechBtn.id = "confirmspeechbtn";
								confirmSpeechBtn.innerHTML = "Play Again";
								confirmSpeechBtn.setAttribute("onclick", "window.location = 'game.html'");
								GAME_MENU.appendChild(confirmSpeechBtn);
							}
						}
					}

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
								JumpUp = setInterval( 
									function()
									{
										positionY -= 3;
										positionX += MOVE_SPEED;
										midAir = true;
									}, 6);
								
								StopJump = setTimeout( 
									function()
									{
										clearInterval(JumpUp);
										velocity = 2;
										midAir = true;
									}, 340);
							}
							checkPlayerBounds();
						}
						else
						{
							this.checkPlayer();
							if(PlayerFace != WALKING_RIGHT)
							{
								PLAYER.src = WALKING_RIGHT;
							}
							rightKey = true;
							checkPlayerBounds();
						}
					}
		
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
								JumpUp = setInterval( 
									function()
									{
										positionY -= 3;
										positionX -= MOVE_SPEED;
										midAir = true;
									}, 6);
								
								StopJump = setTimeout( 
									function()
									{
										clearInterval(JumpUp);
										velocity = 2;
										midAir = true;
									}, 340);
							}
							checkPlayerBounds();
						}
						else
						{
							this.checkPlayer();
							if(PlayerFace != WALKING_LEFT)
							{
								PLAYER.src = WALKING_LEFT;
							}
							leftKey = true;
							checkPlayerBounds();
						}
					}
		
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
	
								JumpUp = setInterval( 
										function()
										{
											positionY -= 3;
											midAir = true;
										}, 8);
									
								StopJump = setTimeout( 
										function()
										{
											clearInterval(JumpUp);
											velocity = 2;
											midAir = true;
										}, 340);
								checkPlayerBounds();
							}	
						}
					}
		
	this.attack = 
					function()
					{
						//space - attack
						this.checkPlayer();
						if(PlayerFace != ATTACKING_RIGHT && PlayerFace == IDLE_RIGHT) 
						{
							PLAYER.src = ATTACKING_RIGHT;
							positionX -= 41;
							positionY += 3;
							attackLoop("Right");
						}
						else
						{
							if(PlayerFace != ATTACKING_LEFT && PlayerFace == IDLE_LEFT)
							{
								PLAYER.src = ATTACKING_LEFT;
								positionX -= 41;
								positionY += 3;
								attackLoop("Left"); 
							}
						}
					}
		
	this.playerblock = 
					function()
					{
						//s - blocking
						this.checkPlayer();
						if(PlayerFace != BLOCKING_RIGHT && PlayerFace == IDLE_RIGHT)
						{
							PLAYER.src = BLOCKING_RIGHT;
							positionX -= 5;
							checkPlayerBounds();
						}
						else
						{
							if(PlayerFace != BLOCKING_LEFT && PlayerFace == IDLE_LEFT)
							{
								PLAYER.src = BLOCKING_LEFT;
								positionX += 1;
								checkPlayerBounds();
							}
						}
					}
}

//ENEMY OBJECT
function ENEMY(eName, health, currHealth, x, y, height, width, defaultIdle, moveLeft, moveRight, attackLeft, attackRight, idleLeft, idleRight, animLength, attackTiming, speed, dmg, range, loot) 
{
	this.imageName = defaultIdle;
	var ENEMY_CHAR = document.createElement("img");
	ENEMY_CHAR.src = this.imageName;
	ENEMY_CHAR.id = "enemy";
	ENEMY_CHAR.class = "enemyChar";
	ENEMY_CHAR.style.height = height + "px";
	ENEMY_CHAR.style.top = y + "px";
	ENEMY_CHAR.style.left = x + "px";
	ENEMYimages.push(ENEMY_CHAR);
	contentFrame.appendChild(ENEMYimages[ENEMYimages.length - 1]);
	
	this.charName = eName;
	this.maxHealth = health;
	this.currentHealth = currHealth;
	this.movementSpeed = speed;
	this.damage = 0;
	this.aggroRange = range;
	
	this.enemyMovingRight = false;
	this.enemyMovingLeft = false;
	this.attacking = false;
	
	this.xCoord = x;
	this.yCoord = y;
	this.width = width;
    this.height = height;	
	
	this.tmp = 1;
	this.moveL = moveLeft;
	this.moveR = moveRight;
	this.attackL = attackLeft;
	this.attackR = attackRight;
	this.idleL = idleLeft;
	this.idleR = idleRight;
	this.attackAnimLength = animLength;
	this.attackRegister = attackTiming;

	this.enemyHealth = document.createElement("b");
	this.enemyHealth.id = "enemyHP";
	this.enemyHealth.style.display = "block";
	this.enemyHealth.style.width = "35px";
	this.enemyHealth.style.height = "20px";
	ENEMYhealthBars.push(this.enemyHealth);
	contentFrame.appendChild(this.enemyHealth);
	
	this.getHP = 
					function()
					{
						this.enemyHealth.style.top = (this.yCoord - 10) + "px";
						this.enemyHealth.style.left = (this.xCoord + 25) + "px";
						this.enemyHealth.innerHTML = this.currentHealth;
					}
	
	this.getRight = 
					function()		
					{
						return this.xCoord + this.width;
					}
					
	this.getBottom =
					function()		
					{
						return this.yCoord + this.height;
					}

	this.moveRight = 
					function()
					{
						if(ENEMY_CHAR.src != this.moveR && !this.enemyMovingRight)
						{
							ENEMY_CHAR.src = this.moveR;
						}
					} 
					
	this.moveLeft = 
					function()
					{
						if(ENEMY_CHAR.src != this.moveL && !this.enemyMovingLeft)
						{
							ENEMY_CHAR.src = this.moveL;
						}
					}
					
	this.changeFace = 
					function(direction)
					{
						if(direction == "right")
						{
							ENEMY_CHAR.src = this.idleR;
						}
						else
						{
							ENEMY_CHAR.src = this.idleL;
						}
					}
					
	this.attack = 
					function(direction)
					{
						if(this.attacking == false)
						{
							//this.aggroRange = 1;
							
							setTimeout( 
								function()
								{
									this.attacking = false;
									this.tmp = 1;
								}, this.attackAnimLength);
							
							if(direction == "right")
							{
								ENEMY_CHAR.src = this.attackR;
								this.attacking == true;
							}
							else
							{
								ENEMY_CHAR.src = this.attackL;
								this.attacking == true;
							}
						}
					} 
	
	this.refreshPosition =
					function()
					{
						ENEMY_CHAR.style.top = this.yCoord + "px";
						ENEMY_CHAR.style.left = this.xCoord + "px";
						this.getHP();
					}
	
	this.attacked =
					function()
					{
                        this.currentHealth -= PLAYER_ONE.damage;
						this.tmp = 1;
                        this.checkStatus();
					}

	this.checkStatus =
					function()
					{
						if(this.currentHealth <= 0)
						{
							if(this.tmp == 1)
							{
								PLAYER_ONE.addGold(loot);
								this.tmp = 0;
								areaKills++;
							}
							return this.dead(); 
						}
						else
						{
							return false;
						}
					}

	this.dead =
					function()
					{
						//alert("he ded");
						this.getHP();
						ENEMY_CHAR.style.opacity = 1;
						ENEMY_CHAR.src = TOMBSTONE;
						return true;
					}
		
	this.withinRange =
					function()
					{
						if (this.getRight() < PLAYER_ONE.xCoord ||
							this.xCoord > PLAYER_ONE.getRight() ||
							this.getBottom() < PLAYER_ONE.yCoord ||
							this.yCoord > PLAYER_ONE.getBottom())
						{
							return false;
						}
						else
						{
							return true;
						}
					}	
					
	this.getHP();
}


//NPC OBJECT
function NPC(eName, health, x, y, height, width, imgName, interactionCnt)
{
	this.imageName = imgName;
	var NPC_CHAR = document.createElement("img");
	NPC_CHAR.src = this.imageName;
	NPC_CHAR.id = "npc";
	NPC_CHAR.class = "npcChar";
	NPC_CHAR.style.width = width + "px";
	NPC_CHAR.style.height = height + "px";
	NPC_CHAR.style.top = y + "px";
	NPC_CHAR.style.left = x + "px";
	NPCimages.push(NPC_CHAR);
	contentFrame.appendChild(NPCimages[NPCimages.length - 1]);
	
	this.charName = eName;
	this.maxHealth = health;
    this.activated = false;
    this.interactionCount = interactionCnt;
    
	this.xCoord = x;
	this.yCoord = y;
	this.width = width;
    this.height = height;
	
	this.aggroRange = 0;
    
    this.attacked =
                    function()
                    {
                        promptPlayer("Do not attack friendly NPCs!");
                    }
	
	this.getRight =
					function()		
					{
						return this.xCoord + this.width;
					}
					
	this.getBottom =
					function()		
					{
						return this.yCoord + this.height;
					}
	
	
}

//ENVIRONMENT OBJECT FOR COLLISIONS (using sets of x and y coordinate ranges
function WORLD_OBJ (locationX, locationY, objectWidth, objectHeight) 
{
	this.objX = locationX;
	this.objY = locationY;
	this.objWidth = objectWidth;
	this.objHeight = objectHeight;
}

//END OF ENGINE ------------------------------------------------------------------------------------------------------------------