//BEGINNING OF GAME ------------------------------------------------------------------------------------------------------------------

function newGame()
{
	if(startNewGame)
	{
		dialogueNum = 1;
		GAME_MENU.style.display = "block";
		ground.style.opacity = "0";
		//var charInfo = document.createElement("form");*********************************************
		newGameAlert = document.createElement("div");
		newGameAlert.id = "promptplayername";
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br /><br />"Ah, yes, my newest champion...<br />whose name, of course, is..."<br /><br />You:';
		GAME_MENU.appendChild(newGameAlert);
		
		lineBreak1 = document.createElement("br");
		GAME_MENU.appendChild(lineBreak1);
		
		inputName = document.createElement("input");
		inputName.type = "text";
		inputName.name = "playername";
		inputName.id = "playerName";
		GAME_MENU.appendChild(inputName);
		
		lineBreak2 = document.createElement("br");
		GAME_MENU.appendChild(lineBreak2);
		
		confirmSpeechBtn = document.createElement("button");
		confirmSpeechBtn.id = "confirmspeechbtn";
		confirmSpeechBtn.innerHTML = "Speak your name";
		confirmSpeechBtn.setAttribute("onclick", "playerInput()");
		GAME_MENU.appendChild(confirmSpeechBtn);
	}
	else
	{
		dialogueNum = 7;
		startGame();
	}
}

function playerInput(npc, dialogueCount) //WHERE DIALOGUE WILL OCCUR
{
	if(inputName.value.length > 0 && dialogueNum == 1 && inputName.value.charAt(0) != " ")
	{
		chosenName = inputName.value;
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br /><br />"<b id = "misc">' + chosenName + '</b>. I knew that... it was merely a test!<br />In any event, <b id = "misc">' + chosenName + '</b>, you simply must be wondering exactly where you are."';
		GAME_MENU.removeChild(lineBreak1);
		GAME_MENU.removeChild(lineBreak2);
		GAME_MENU.removeChild(inputName);
		confirmSpeechBtn.innerHTML = "Continue";
		confirmSpeechBtn.setAttribute("onclick", "dialogueNum++; playerInput();");
		
		skipSpeechBtn = document.createElement("button");
		skipSpeechBtn.id = "skipspeechbtn";
		skipSpeechBtn.innerHTML = "Skip Dialogue";
		skipSpeechBtn.setAttribute("onclick", "dialogueNum = 7; startGame();");
		GAME_MENU.appendChild(skipSpeechBtn);
	}
	if(dialogueNum == 2)
	{
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br /><br />"...Me too, to be honest."<br />';
	}
	if(dialogueNum == 3)
	{
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br /><br />"But that matters not! All that matters is that I have chosen you to bring justice to the realm."<br />';
	}
	if(dialogueNum == 4)
	{
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br />"It is known that the Corrupt King rules over the realm and ruins the lives of its people by enslaving every one of them: man, woman, and child alike. This must not go on any longer; he must be stopped."<br />';
	}
	if(dialogueNum == 5)
	{
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br />"And, of course, the realm simply cannot function without a king. This is where you come in, <b id = "misc">' + chosenName + '</b>. You are here because you are destined to become the new king, one that is just and serves not for his own benefit, but for that of the people."<br />';
	}
	if(dialogueNum == 6)
	{
		newGameAlert.innerHTML = 'Ominous Voice:<br /><br />"King <b id = "misc">' + chosenName + '</b>. It has a pleasant ring to it, does it not? Eh. <br />Anyway, this is where I must leave you for now. You must travel to the Castle of the Corrupt King and take your place as the true monarch. Are you ready?"<br />';
		confirmSpeechBtn.innerHTML = "Yes";
		confirmSpeechBtn.setAttribute("onclick", "startGame();");
		dialogueNum++;
	}
    
	if(!startNewGame)
    {
		PLAYER_ONE.charName = chosenName;
		currentSpeaker = npc;
		
        if(currentSpeaker == HUNTER.charName)
        {
			inDialogue = true;
            GAME_MENU.style.display = "block";
			ground.style.display = "none";//----------------------------------------------------------------------------
            messageAlert = document.createElement("div");
            messageAlert.id = "promptplayermessage";
        
            if(dialogueCount == 0)
            {
                messageAlert.innerHTML = 'Huntress:<br /><br />"Gah! Where in the hell did you come from?<br />Who are you?"<br /><br />';
                GAME_MENU.appendChild(messageAlert);
                GAME_MENU.appendChild(confirmSpeechBtn);
                confirmSpeechBtn.innerHTML = "Next";
                confirmSpeechBtn.setAttribute("onclick", "continueDialogueBtn()");
				skipSpeechBtn.setAttribute("onclick", "skipDialogueBtn()");
				GAME_MENU.appendChild(skipSpeechBtn);
            }
            if(dialogueCount == 1)
            {
				messageAlert.innerHTML = 'Huntress:<br /><br />"Your name is ' + PLAYER_ONE.charName + '? How unfortunate."<br />';
				GAME_MENU.appendChild(messageAlert);
                GAME_MENU.appendChild(confirmSpeechBtn);
				GAME_MENU.appendChild(skipSpeechBtn);
            }
			if(dialogueCount == 2)
            {
				messageAlert.innerHTML = 'Huntress:<br /><br />"What? You aim to kill the king and take the throne? Well, while I admire your ambition, I have been around long enough to know that your quest is suicide. On the other hand, I would love to see how badly this turns out."<br />';
				GAME_MENU.appendChild(messageAlert);
                GAME_MENU.appendChild(confirmSpeechBtn);
				GAME_MENU.appendChild(skipSpeechBtn);
            }
			if(dialogueCount == 3)
            {
				messageAlert.innerHTML = 'Huntress:<br /><br />"You are far from the first who has tried to overthrow our sorry excuse of a king and you likely will not be the last. It is hopeless; he is unreachable and, frankly, we all might as well accept him."<br />';
				GAME_MENU.appendChild(messageAlert);
                GAME_MENU.appendChild(confirmSpeechBtn);
				GAME_MENU.appendChild(skipSpeechBtn);
            }
			if(dialogueCount == 4)
            {
				messageAlert.innerHTML = 'Huntress:<br /><br />"However, I know your type; go on and <i>prove me wrong</i>. I will be here, waiting for your inevitable demise, and ready to loot your corpse. Happy traveling!"<br />';
				GAME_MENU.appendChild(messageAlert);
                GAME_MENU.appendChild(confirmSpeechBtn);
				GAME_MENU.appendChild(skipSpeechBtn);
            }
			if(dialogueCount == 5)
            {
				messageAlert.innerHTML = 'Huntress:<br /><br />"Go on, fool, I have no more to say to you."<br />';
				GAME_MENU.appendChild(messageAlert);
				skipSpeechBtn.innerHTML = "Leave";
				GAME_MENU.appendChild(skipSpeechBtn);
            }
        }
		if(currentSpeaker == SORCERER.charName)
        {
			inDialogue = true;
			lastDialogue = true;
            GAME_MENU.style.display = "block";
			ground.style.display = "none";//----------------------------------------------------------------------------
            messageAlert = document.createElement("div");
            messageAlert.id = "promptplayermessage";

            messageAlert.innerHTML = 'Sorcerer:<br /><br />"Ah, wary traveler. In the absence of foes, you shall recieve more health.<br />Now go and complete your mission."<br /><br />';
            GAME_MENU.appendChild(messageAlert);
			skipSpeechBtn.setAttribute("onclick", "skipDialogueBtn()");
			skipSpeechBtn.innerHTML = "Leave";
			GAME_MENU.appendChild(skipSpeechBtn);
        }
        if(currentSpeaker == CASTLE_GUARD.charName)
        {
			inDialogue = true;
			lastDialogue = true;
            GAME_MENU.style.display = "block";
			ground.style.display = "none";//----------------------------------------------------------------------------
            messageAlert = document.createElement("div");
            messageAlert.id = "promptplayermessage";

            messageAlert.innerHTML = 'Castle Knight:<br /><br />"Hmph.<br />Indeed you are small, but you have proven your strength.<br />Go on and you shall fulfill your destiny-- one way or another..."<br /><br />';
            GAME_MENU.appendChild(messageAlert);
			skipSpeechBtn.setAttribute("onclick", "skipDialogueBtn()");
			skipSpeechBtn.innerHTML = "Leave";
			GAME_MENU.appendChild(skipSpeechBtn);
        }

    }
}

function continueDialogueBtn() //CONTINUE THE DIALOGUE
{
	lastDialogue = false;
	
	if(currentSpeaker == HUNTER.charName)
	{
		GAME_MENU.removeChild(messageAlert); 
		GAME_MENU.removeChild(skipSpeechBtn); 
		if(HUNTER.interactionCount == 4)
		{
			GAME_MENU.removeChild(confirmSpeechBtn);
			lastDialogue = true;
		}
		if(HUNTER.interactionCount < 5)
		{
			HUNTER.interactionCount++;
		}
		else
		{
			lastDialogue = false;
		}
		playerInput(HUNTER.charName, HUNTER.interactionCount);
	}
}

function skipDialogueBtn()
{
	GAME_MENU.removeChild(messageAlert); 
	
	if(!lastDialogue)
	{
		GAME_MENU.removeChild(confirmSpeechBtn); 
	}
	inDialogue = false;
	GAME_MENU.removeChild(skipSpeechBtn); 
	GAME_MENU.style.display = 'none'; 
	ground.style.display = 'block';
}

//initialize game function
function startGame()
{
	//IF THIS IS NOT INCLUDED, THESE VALUES ARE BLANK (SIZE OF GAME SCREEN)
	contentFrame.style.width = "800px";
	SCREEN_WIDTH = contentFrame.style.width;
	contentFrame.style.height = "500px";
	SCREEN_HEIGHT = contentFrame.style.height;

	if(startNewGame)
	{
		buildLevel(1,1);
		GAME_MENU.removeChild(confirmSpeechBtn);
		GAME_MENU.removeChild(skipSpeechBtn);
        GAME_MENU.removeChild(newGameAlert);
        GAME_MENU.style.display = "none";
        PLAYER_ONE = new PLAYER_CHAR(chosenName, 50, 100, 100, 0, 10, 76, 78, 173, 80, 102, 106);
        startNewGame = false;
	}
	else
	{
		revertToCheckpoint();
	}
	//player setup
	PLAYER_NAME.innerHTML = PLAYER_ONE.charName;
	//healthBar.max = PLAYER_ONE.maxHealth;
	//healthBar.value = PLAYER_ONE.currentHealth;
	health.innerHTML = PLAYER_ONE.currentHealth;
	currency.innerHTML = PLAYER_ONE.gold;
	attackFrame = 1; //first frame for attack animation

	//Continually running interval for gravity, positioning, boundaries using dynamic velocity, and basically everything
	velocity = 0;
	gravity = -0.4;
	if(GAME_RUNNING)
	{
		setInterval(
		function()
		{
			PLAYER_ONE.checkPlayer();
			positionY += velocity;
			
			if(velocity != 0)
			{
				velocity = (velocity < 0) ? velocity + gravity : velocity - gravity;
			}
			
			if(PLAYER_ONE.currentHealth < PLAYER_ONE.maxHealth)
			{
				PLAYER_ONE.currentHealth += PLAYER_ONE.HPregen;
				healthBar.value = PLAYER_ONE.currentHealth;
			}
			
			if(rightKey && leftKey)
			{
				rightKey = false;
				leftKey = false;
			}
			
			if(rightKey && PlayerFace == WALKING_RIGHT && !attackKey && !blockKey)
			{
				positionX += MOVE_SPEED;
				PLAYER_ONE.xCoord = positionX;
				PLAYER_ONE.yCoord = positionY;
				ifCollision();
			}  
			
			if(leftKey && PlayerFace == WALKING_LEFT && !attackKey && !blockKey)
			{
				positionX -= MOVE_SPEED;
				PLAYER_ONE.xCoord = positionX;
				PLAYER_ONE.yCoord = positionY;
				ifCollision();
			}
			
			if(attackKey && rightKey || attackKey && leftKey)
			{
				rightKey = false;
				leftKey = false;
				attackKey = false;
			}
			
			if(leftKey && rightKey && jumpKey)
			{
				rightKey = false;
				leftKey = false;
				jumpKey = false;
				midAir = true;
			}
			
			if(blockKey && attackKey)
			{
				blockKey = false;
				attackKey = false;
			}
			
			if(blockKey && leftKey || blockKey && rightKey)
			{
				blockKey = false;
				leftKey = false;
				rightKey = false;
			}
			
			if(velocity == 0)
			{
				midAir = false;
			}
			
			if(ENEMIES.length > 0)
			{
				for(var i = 0; i < ENEMIES.length; i++)
				{
					if(ENEMIES[i].attacking == true)
					{
						ENEMYimages[i].style.left = parseInt(ENEMIES[i].xCoord + 50) + "px";
					}
					else
					{
						ENEMYimages[i].style.left = parseInt(ENEMIES[i].xCoord - 50) + "px";
					}
					
					if(PLAYER_ONE.hasCollision(ENEMIES[i]) == false && ENEMIES[i].checkStatus() == false)
					{
						//ENEMIES[i].attacking = false;
						//ENEMIES[i].attacking = false;
						
						if(PLAYER_ONE.getRight() <= ENEMIES[i].xCoord)
						{
							ENEMIES[i].moveLeft();
							ENEMIES[i].enemyMovingLeft = true;
							ENEMIES[i].xCoord -= (ENEMIES[i].movementSpeed);
						}
						else
						{
							if(PLAYER_ONE.xCoord >= ENEMIES[i].getRight())
							{
								ENEMIES[i].moveRight();
								ENEMIES[i].enemyMovingRight = true;
								ENEMIES[i].xCoord += (ENEMIES[i].movementSpeed);
							}
						}
						ENEMIES[i].refreshPosition();
					}
					else
					{
						if(PLAYER_ONE.hasCollision(ENEMIES[i]) == true && ENEMIES[i].checkStatus() == false)
						{
							ENEMIES[i].enemyMovingRight = false;
							ENEMIES[i].enemyMovingLeft = false;
							
							if(PLAYER_ONE.getRight() < ENEMIES[i].xCoord)
							{
								//ENEMIES[i].changeFace("left");
								ENEMIES[i].attack("left");
							}
							else
							{
								if(PLAYER_ONE.xCoord > ENEMIES[i].getRight())
								{
									//ENEMIES[i].changeFace("right");
									ENEMIES[i].attack("right");
								}
							}
						}
					}

					if(NPCS.length == 0 && !ENEMIES[i].checkStatus())
					{
						PLAYER_ONE.currentHealth-=0.05;
						health.innerHTML = parseInt(PLAYER_ONE.currentHealth);
						PLAYER_ONE.checkStatus();
					}
				}
			}
			
			checkPlayerBounds();
			playerPos();
		}, 12);
	}
}

function revertToCheckpoint()
{
	alert("You died.");
	window.location.href = "game.html";
}

//BUILD WORLD EACH TIME PLAYER MOVES TO NEW AREA
function buildLevel(worldNum, areaNum)
{
	//character and HUD setup
	PLAYER.src = IDLE_RIGHT;
	playerNotifications.style.display = "none";
	
	//character starting position)
	positionX = 50;
	positionY = verticalBound;
	PLAYER.style.top = positionY + "px";
	PLAYER.style.left = positionX + "px";
	PlayerFace = "";
	
	//ground position
	ground.style.top = "479px";
	ground.style.opacity = "1";
	GAME_MENU.style.background = "rgba(0, 0, 0, 0.7)";
	
	area = areaNum;
	world = worldNum;
	
	//document.addEventListener("pagehide", setCheckpoint(world, true));
	
	rightKey = false;
	leftKey = false;
	
	//EMPTY CHARACTER ARRAYS EACH TIME PLAYER LEAVES AREA 
	if(NPCS.length > 0)
	{
		for(var i = 0; i < NPCS.length; i++)
		{
			NPCS[i] = "";
			contentFrame.removeChild(NPCimages[i]);
		}
		NPCS = new Array();
		NPCimages = new Array();
	}
	if(ENEMIES.length > 0)
	{
		for(var x = 0; x < ENEMIES.length; x++)
		{
			contentFrame.removeChild(ENEMYimages[x]);
			contentFrame.removeChild(ENEMYhealthBars[x]);
		}
		ENEMIES = new Array();
		ENEMYimages = new Array();
		ENEMYhealthBars = new Array();
	}
	
	//ENEMY PARAMETERS: eName, health, currHealth, x, y, height, width, defaultIdle, moveLeft, moveRight, attackLeft, attackRight, idleLeft, idleRight, animLength, attackTiming, speed, dmg, range, loot
	
	if(worldNum == 1)
	{
		boss = false;
		if(areaNum == 1) //checkpoint
		{
			HUNTER = new NPC("Huntress", 100, 630, 367, 115, 70, IDLE_HUNTER, 0);
			NPCS.push(HUNTER);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/day.png)";
			if(PLAYER_ONE != null)
			{
				//setCheckpoint(worldNum);
			}
		}
		if(areaNum == 2)
		{
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/dawn.png)";
		}
		if(areaNum == 3)
		{
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2.7, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Butcher", 100, 100, 540, 325, 154, 81, IDLE_BANDIT_BUTCHER_RIGHT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1.3, 8, 30, parseInt(Math.random() * 10) + 5); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/pacific_mountain_range_free_mspaint_background_by_birritan-d8frpok.png)";
		}
		locale.innerHTML = worldNum + "-" + areaNum;
	}
	if(worldNum == 2) //checkpoint
	{
		boss = false;
		if(areaNum == 1)
		{
			SORCERER = new NPC("Sorcerer", 100, 600, 388, 94, 124, IDLE_SORCERER, 0); //health potion, hpregen
			NPCS.push(SORCERER);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/day.png)";
			PLAYER_ONE.currentHealth = 100;
			//setCheckpoint(worldNum);
		}
		if(areaNum == 2)
		{
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 550, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Bandit", 60, 60, 590, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			BANDIT_03 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_RIGHT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_03);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/pacific_mountain_range_free_mspaint_background_by_birritan-d8frpok.png)";
		}
		if(areaNum == 3)
		{
			BANDIT_01 = new ENEMY("Butcher", 110, 110, 560, 315, 164, 86, IDLE_BANDIT_BUTCHER_RIGHT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1, 8, 30, parseInt(Math.random() * 10) + 5); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Bandit", 60, 60, 600, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2.7, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			BANDIT_03 = new ENEMY("Butcher", 100, 100, 630, 325, 154, 81, IDLE_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1.3, 12, 30, parseInt(Math.random() * 10) + 5); //EDIT VALUES
			ENEMIES.push(BANDIT_03);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/dawn.png)";
		}
		locale.innerHTML = worldNum + "-" + areaNum;
	}
	if(worldNum == 3) //checkpoint
	{
		boss = false;
		if(areaNum == 1)
		{
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/day.png)";
			PLAYER_ONE.currentHealth+=30;
			//setCheckpoint(worldNum);
		}
		if(areaNum == 2)
		{
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/pacific_mountain_range_free_mspaint_background_by_birritan-d8frpok.png)";
		}
		if(areaNum == 3) //boss
		{
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2.7, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Butcher", 100, 100, 540, 325, 154, 81, IDLE_BANDIT_BUTCHER_RIGHT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1.3, 8, 30, parseInt(Math.random() * 10) + 5); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/pacific_mountain_range_free_mspaint_background_by_birritan-d8frpok.png)";
		}
		locale.innerHTML = worldNum + "-" + areaNum;
	}
	if(worldNum == 4) //checkpoint
	{
		boss = false;
		if(areaNum == 1)
		{
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/day.png)";
			PLAYER_ONE.currentHealth+=50;
			//setCheckpoint(worldNum);
		}
		if(areaNum == 2)
		{
			BANDIT_01 = new ENEMY("Bandit", 100, 100, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Bandit", 100, 100, 600, 355, 124, 76, IDLE_BANDIT_PEASANT_RIGHT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			BANDIT_03 = new ENEMY("Bandit", 100, 100, 570, 355, 124, 76, IDLE_BANDIT_PEASANT_RIGHT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_03);
			BANDIT_04 = new ENEMY("Bandit", 100, 100, 540, 355, 124, 76, IDLE_BANDIT_PEASANT_RIGHT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_04);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/dawn.png)";
		}
		if(areaNum == 3) //boss
		{
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2.7, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Butcher", 100, 100, 540, 325, 154, 81, IDLE_BANDIT_BUTCHER_RIGHT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1.3, 8, 30, parseInt(Math.random() * 10) + 5); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/dawn.png)";
		}
		locale.innerHTML = worldNum + "-" + areaNum;
	}
	if(worldNum == 5) //checkpoint
	{
		boss = false;
		if(areaNum == 1)
		{
			CASTLE_GUARD = new NPC("Castle Knight", 100, 330, 291, 188, 188, IDLE_GUARD, 0); //conversation
			NPCS.push(CASTLE_GUARD);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/day.png)";
			PLAYER_ONE.currentHealth+=30;
			//setCheckpoint(worldNum);
		}
		if(areaNum == 2)
		{
			BANDIT_01 = new ENEMY("Butcher", 180, 180, 540, 225, 254, 121, IDLE_BANDIT_BUTCHER_RIGHT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1.3, 20, 30, parseInt(Math.random() * 100) + 20); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/pacific_mountain_range_free_mspaint_background_by_birritan-d8frpok.png)";
		}
		if(areaNum == 3) //boss
		{
			PLAYER_HUD.style.color = "white";
			locale.style.color = "white";
			boss = true;
			BANDIT_01 = new ENEMY("Bandit", 60, 60, 630, 355, 124, 76, IDLE_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_LEFT, MOVING_BANDIT_PEASANT_RIGHT, ATTACKING_BANDIT_PEASANT_LEFT, ATTACKING_BANDIT_PEASANT_RIGHT, IDLE_BANDIT_PEASANT_LEFT, IDLE_BANDIT_PEASANT_RIGHT, 2250, 1450, 2.7, 5, 30, parseInt(Math.random() * 5) + 1); //EDIT VALUES
			ENEMIES.push(BANDIT_01);
			BANDIT_02 = new ENEMY("Butcher", 100, 100, 540, 325, 154, 81, IDLE_BANDIT_BUTCHER_RIGHT, MOVING_BANDIT_BUTCHER_LEFT, MOVING_BANDIT_BUTCHER_RIGHT, ATTACKING_BANDIT_BUTCHER_LEFT, ATTACKING_BANDIT_BUTCHER_RIGHT, IDLE_BANDIT_BUTCHER_LEFT, IDLE_BANDIT_BUTCHER_RIGHT, 1600, 960, 1.3, 8, 30, parseInt(Math.random() * 10) + 5); //EDIT VALUES
			ENEMIES.push(BANDIT_02);
			contentFrame.style.background = "url(Assets/rocks.png), url(Assets/finalcastle.png)";
		}
		locale.innerHTML = worldNum + "-" + areaNum;
	}
}

//NOTIFICATIONS **********************************************************
function promptPlayer(message)
{
	playerNotifications.style.display = "block";
	playerNotifications.innerHTML = message;
}

//INTERACT RANGE, COLLISIONS, AND AGGRO RANGE
function ifCollision()
{
	if(NPCS.length > 0)
	{
		for(var i = 0; i < NPCS.length; i++)
		{
			if(PLAYER_ONE.hasCollision(NPCS[i]))
			{
				promptPlayer("Press <b class = 'buttonPrompt'>E</b> to talk to " + NPCS[i].charName);
				return NPCS[i];
			}
			else
			{
				playerNotifications.style.display = "none";
				playerNotifications.innerHTML = "";
			}
		}
	}
	
	if(ENEMIES.length > 0)
	{
		for(var x = 0; x < ENEMIES.length; x++)
		{
			if(PLAYER_ONE.hasCollision(ENEMIES[x]) && ENEMIES[x].checkStatus() == false)
			{
				promptPlayer("Press <b class = 'buttonPrompt'>Spacebar</b> to attack " + ENEMIES[x].charName);
				return ENEMIES[x];
			}
			else
			{
				playerNotifications.style.display = "none";
				playerNotifications.innerHTML = "";
			}
		}
	}
}

function determineNPC() //finds out which NPC the player is trying to talk to -------------------------------------------
{
	for(var x = 0; x < NPCS.length; x++)
	{
		if(ifCollision().charName == NPCS[x].charName)
		{
			return NPCS[x].interactionCount;
		}
	}
}

//LOOPED PNG'S FOR ATTACK ANIMATIONS
function attackLoop(direction)
{	
	leftKey = false;
	rightKey = false;
	
	//attackStart = setInterval("attackKey = true", 1);
	
	setTimeout( 
		function()
		{
			positionX += 41;
			attackKey = false;
			//clearInterval(attackStart);
			if(direction == "Right")
			{
				PLAYER.src = IDLE_RIGHT;
			}
			else
			{
				PLAYER.src = IDLE_LEFT;
			}
		}, 880);
	
	PLAYER.src = "images/Player/Attack/attackingRoman" + direction + "Frames.gif";
	setTimeout(
		function()
		{
			if(PLAYER_ONE.hasCollision(ifCollision()) && attackKey)
			{
				ifCollision().attacked();
				if(ENEMIES.length > 0 && ifCollision().checkStatus() == false)
				{
					ifCollision().getHP();
				}
			}
		}, 420);
}

//setting player position using x and y values
function playerPos()
{
	posX = positionX + "px";
	posY = positionY + "px";
	PLAYER.style.top = posY;
	PLAYER.style.left = posX;
}

//checking what buttons are being pressed
function checkKeyPressDown(e)
{
    if(!startNewGame && !inDialogue)
    {
    	e.preventDefault();
        if (e.which == 65 || e.keyCode == 65 || 
        	e.which == 37 || e.keyCode == 37)
        {
            PLAYER_ONE.moveLeft();
            leftKey = true;
        }
        else
        {
            if (e.which == 68 || e.keyCode == 68 || 
            	e.which == 39 || e.keyCode == 39)
            {
                PLAYER_ONE.moveRight();
                rightKey = true;
            }
        }
        if (e.which == 32 || e.keyCode == 32)
        {
            //e.preventDefault();
	    	attackKey = true;
            PLAYER_ONE.attack();
        }
        if (e.which == 83 || e.keyCode == 83 || 
        	e.which == 40 || e.keyCode == 40)
        {
            PLAYER_ONE.playerblock();
            blockKey = true;
        }
        if (e.which == 87 || e.keyCode == 87 || 
        	e.which == 38 || e.keyCode == 38)
        {
            PLAYER_ONE.jump();
            jumpKey = true;
        }
    
        if (e.which == 69 || e.keyCode == 69)
        {
			playerInput(ifCollision().charName, determineNPC());
        }
    }
}

//checking what buttons are being released and setting player face back to idle
function checkKeyPressUp(e)
{
    if(!startNewGame)
    {
        PLAYER_ONE.checkPlayer();
        if (e.which == 65 || e.keyCode == 65 || 
        	e.which == 68 || e.keyCode == 68 || 
        	e.which == 83 || e.keyCode == 83 || 
        	e.which == 32 || e.keyCode == 32 || 
        	e.which == 37 || e.keyCode == 37 || 
        	e.which == 38 || e.keyCode == 38 || 
        	e.which == 39 || e.keyCode == 39 || 
        	e.which == 40 || e.keyCode == 40)
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
                        positionX -= 1;
                    }
                    else
                    {
                        if(PlayerFace == BLOCKING_RIGHT)
                        {
                            PLAYER.src = IDLE_RIGHT;
                            blockKey = false;
                            positionX += 5;
                        }
                    }
                }
            }
        }
    }
}

//setting up player boundaries for the screen (I need to edit it to accommodate x-direction movement and allow scrolling while keeping the character in view)
function checkPlayerBounds() //DO THE THING WITH THE MOVING TO NEW AREA
{
	PLAYER_ONE.checkPlayer();
	
	if(velocity > 0)
	{
		jumptimes = 0;
	}
	
	if(normalBounds)//normal sized area
	{
		if(positionY >= verticalBound)
		{
			positionY = verticalBound;
			jumptimes = 0;
			velocity = 0;
		}
		else
		{
			jumptimes = 1;
		}
		
		if(positionX <= wideLeftBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
		{
			if(area > 1 && !boss)
			{
				buildLevel(world, area - 1);
				positionX = wideRightBound - 10;
				PLAYER.src = IDLE_LEFT;
			}
			else
			{
				if(boss || world <= 1)
				{
					positionX = wideLeftBound;
				}
				else
				{
					buildLevel(world - 1, TOTAL_AREA_COUNT);
					positionX = wideRightBound - 10;
					PLAYER.src = IDLE_LEFT;
				}
			}
		}
		else
		{
			if(positionX <= wideLeftBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
			{
				positionX = wideLeftBound;
			}
		}
		
		if(positionX >= wideRightBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT && area < TOTAL_AREA_COUNT)
		{               
			buildLevel(world, area + 1);
		}
		else
		{
			if(positionX >= wideRightBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT && area == TOTAL_AREA_COUNT && world < TOTAL_WORLD_COUNT)
			{
				buildLevel(world + 1, 1);	
			}
			else
			{
				if(positionX >= wideRightBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
				{
					positionX = wideRightBound;
				}
			}
		}
	}
	else
	{
		if(positionY >= verticalBound)
		{
			positionY = verticalBound;
			jumptimes = 0;
			velocity = 0;
		}
		
		if(positionX <= smallLeftBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
		{
			positionX = smallLeftBound;
		}
		
		if(positionX >= smallRightBound && PlayerFace != ATTACKING_RIGHT && PlayerFace != ATTACKING_LEFT)
		{
			positionX = smallRightBound;
		}
	}
}