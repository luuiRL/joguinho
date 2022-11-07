var gameState = "play";
var gameState = "end";
var gameOver, gameOverImg, gameOverSound;
var swordSound;

var parede1, parede2, parede1Img;

var WarriorLife = 250, WarriorLifeImg, WarriorLifeGroup;
var slimeLife = 2;
var Sword, SwordImg;

var restart, restartImg;
var corrida, corridaSound;


//Cavaleira;

var Warrior = 250;
//CORRIDA
var WarriorRun1, WarriorRun2, WarriorRun3, WarriorRun4 , WarriorRun5, WarriorRun6, WarriorRun7, WarriorRun8;
//PARADA
var WarriorIdle1, WarriorIdle2, WarriorIdle3, WarriorIdle4, WarriorIdle5, WarriorIdle6;
//CORRIDA PRO OUTRO LADO
var WarriorRunReverse1, WarriorRunReverse2, WarriorRunReverse3, WarriorRunReverse4, WarriorRunReverse5, WarriorRunReverse6, WarriorRunReverse7, WarriorRunReverse8;
//PARADA PRO OUTRO LADO
var WarriorIdleReverse1, WarriorIdleReverse2, WarriorIdleReverse3, WarriorIdleReverse4, WarriorIdleReverse5, WarriorIdleReverse6;
//ATAQUE
var WarriorAttack1,  WarriorAttack2,  WarriorAttack3,  WarriorAttack4,  WarriorAttack5,  WarriorAttack6,  WarriorAttack7,  WarriorAttack8,  WarriorAttack9, WarriorAttack10, WarriorAttack11, WarriorAttack12;

var WarriorDie1, WarriorDie2, WarriorDie3, WarriorDie4, WarriorDie5, WarriorDie6, WarriorDie7, WarriorDie8, WarriorDie9, WarriorDie10, WarriorDie11;

var WarriorReverseAttack1, WarriorReverseAttack2, WarriorReverseAttack3;


//////////////////////////////////////////////////

//Fundo;
var bg_img, bg;

//////////////////////////////////////////////////

//Esqueleto;

var Skeleton, SkeletonATK, SkeletonF, SkeletonHit, SkeletonWalk, SkeletonIdle;

//////////////////////////////////////////////////

//Slime;

var slime, slime2, slime3, slime4, slime5, slime6, slime7, slime8, slime9; 

var slime10, slime11, slime12, slime13, slime14, slime15, slime16, slime17, slime18;

var slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4;

var slimeGroup;

var slimeMove1, slimeMove2, slimeMove3, slimeMove4;
var slimeMove5, slimeMove6, slimeMove7, slimeMove8;

var slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5;

//MOVIMENTAÇÃO
var direction = 1;
var velocityX = 0;

function preload() {
  bg_img = loadImage("dungeon do meu game.png"); 


  

  //CAVALEIRO
  //corrida
  WarriorRun1 = loadImage("Warrior_Run_1.png");
  WarriorRun2 = loadImage("Warrior_Run_2.png");
  WarriorRun3 = loadImage("Warrior_Run_3.png");
  WarriorRun4 = loadImage("Warrior_Run_4.png");
  WarriorRun5 = loadImage("Warrior_Run_5.png");
  WarriorRun6 = loadImage("Warrior_Run_6.png");
  WarriorRun7 = loadImage("Warrior_Run_7.png");
  WarriorRun8 = loadImage("Warrior_Run_8.png");



  //corrida reversa
  WarriorRunReverse1 = loadImage("Warrior_RunReverse_1.png");
  WarriorRunReverse2 = loadImage("Warrior_RunReverse_2.png");
  WarriorRunReverse3 = loadImage("Warrior_RunReverse_3.png");
  WarriorRunReverse4 = loadImage("Warrior_RunReverse_4.png");
  WarriorRunReverse5 = loadImage("Warrior_RunReverse_5.png");
  WarriorRunReverse6 = loadImage("Warrior_RunReverse_6.png");
  WarriorRunReverse7 = loadImage("Warrior_RunReverse_7.png");
  WarriorRunReverse8 = loadImage("Warrior_RunReverse_8.png");



  //parado
  WarriorIdle1 = loadImage("Warrior_Idle_1.png");
  WarriorIdle2 = loadImage("Warrior_Idle_2.png");
  WarriorIdle3 = loadImage("Warrior_Idle_3.png");
  WarriorIdle4 = loadImage("Warrior_Idle_4.png");
  WarriorIdle5 = loadImage("Warrior_Idle_5.png");
  WarriorIdle6 = loadImage("Warrior_Idle_6.png");



  //parado reverso
  WarriorIdleReverse1 = loadImage("Warrior_IdleReverse_1.png");
  WarriorIdleReverse2 = loadImage("Warrior_IdleReverse_2.png");
  WarriorIdleReverse3 = loadImage("Warrior_IdleReverse_3.png");
  WarriorIdleReverse4 = loadImage("Warrior_IdleReverse_4.png");
  WarriorIdleReverse5 = loadImage("Warrior_IdleReverse_5.png");
  WarriorIdleReverse6 = loadImage("Warrior_IdleReverse_6.png");



  //ataque
  WarriorAttack1 = loadImage("Warrior_Attack_1.png");
  WarriorAttack2 = loadImage("Warrior_Attack_2.png");
  WarriorAttack3 = loadImage("Warrior_Attack_3.png");
  WarriorAttack4 = loadImage("Warrior_Attack_4.png");
  WarriorAttack5 = loadImage("Warrior_Attack_5.png");
  WarriorAttack6 = loadImage("Warrior_Attack_6.png");
  WarriorAttack7 = loadImage("Warrior_Attack_7.png");
  WarriorAttack8 = loadImage("Warrior_Attack_8.png");
  WarriorAttack9 = loadImage("Warrior_Attack_9.png");
  //2°Attack
  WarriorAttack10 = loadImage("Warrior_Attack_10.png");
  WarriorAttack11 = loadImage("Warrior_Attack_11.png");
  WarriorAttack12 = loadImage("Warrior_Attack_12.png");

  WarriorReverseAttack1 = loadImage("Warrior_Reverse_Attack_10.png"); 
  WarriorReverseAttack2 = loadImage("Warrior_Reverse_Attack_11.png"); 
  WarriorReverseAttack3 = loadImage("Warrior_Reverse_Attack_12.png"); 
  


  //morte
  WarriorDie1 = loadImage("Warrior_Death_1.png");
  WarriorDie2 = loadImage("Warrior_Death_2.png");
  WarriorDie3 = loadImage("Warrior_Death_3.png");
  WarriorDie4 = loadImage("Warrior_Death_4.png");
  WarriorDie5 = loadImage("Warrior_Death_5.png");
  WarriorDie6 = loadImage("Warrior_Death_6.png");
  WarriorDie7 = loadImage("Warrior_Death_7.png");
  WarriorDie8 = loadImage("Warrior_Death_8.png");
  WarriorDie9 = loadImage("Warrior_Death_9.png");
  WarriorDie10 = loadImage("Warrior_Death_10.png");
  WarriorDie11 = loadImage("Warrior_Death_11.png");



  //vida
  WarriorLifeImg = loadImage("vida.png");
  gameOverSound = loadSound("dark-souls-you-died-By-Tuna.mp3");
  restartImg = loadImage("restart.png");
  corridaSound = loadSound("Running Sound Effect(MP3_320K).mp3");




  //SLIME
  slimeMove1 = loadImage("slime-move-0.png");
  slimeMove2 = loadImage("slime-move-1.png");
  slimeMove3 = loadImage("slime-move-2.png");
  slimeMove4 = loadImage("slime-move-3.png");

  slimeATQ1 = loadImage("slime-attack-0.png");
  slimeATQ2 = loadImage("slime-attack-1.png");
  slimeATQ3 = loadImage("slime-attack-2.png");
  slimeATQ4 = loadImage("slime-attack-3.png");
  slimeATQ5 = loadImage("slime-attack-4.png");

  slimeDie1 = loadImage("slime-die-0.png");
  slimeDie2 = loadImage("slime-die-1.png");
  slimeDie3 = loadImage("slime-die-2.png");
  slimeDie4 = loadImage("slime-die-3.png");

  gameOverImg = loadImage("gameOver.png");
  corridaSound = loadSound("Running Sound Effect(MP3_320K).mp3");
  swordSound = loadSound("Som de espada (320 kbps).mp3");

  //SLIMEREVERSE

  slimeReverseMove1 = loadImage("slime-reverse-move-0.png");
  slimeReverseMove2 = loadImage("slime-reverse-move-1.png");
  slimeReverseMove3 = loadImage("slime-reverse-move-2.png");
  slimeReverseMove4 = loadImage("slime-reverse-move-3.png");

  parede1Img = loadImage("paredezinhakk.png");

  



  
  //WarriorRun
  WarriorRun1.playing = true;
  WarriorRun2.playing = true;
  WarriorRun3.playing = true;
  WarriorRun4.playing = true;
  WarriorRun5.playing = true;
  WarriorRun6.playing = true;
  WarriorRun7.playing = true;

  WarriorRun1.looping = false;
  WarriorRun2.looping = false;
  WarriorRun3.looping = false;
  WarriorRun4.looping = false;
  WarriorRun5.looping = false;
  WarriorRun6.looping = false;
  WarriorRun7.looping = false;

  //WarriorRunReverse
  WarriorRunReverse1.playing = true;
  WarriorRunReverse2.playing = true;
  WarriorRunReverse3.playing = true;
  WarriorRunReverse4.playing = true;
  WarriorRunReverse5.playing = true;
  WarriorRunReverse6.playing = true;
  WarriorRunReverse7.playing = true;
  WarriorRunReverse8.playing = true;

  WarriorRunReverse1.looping = false;
  WarriorRunReverse2.looping = false;
  WarriorRunReverse3.looping = false;
  WarriorRunReverse4.looping = false;
  WarriorRunReverse5.looping = false;
  WarriorRunReverse6.looping = false;
  WarriorRunReverse7.looping = false;
  WarriorRunReverse8.looping = false;

  //WarriorIdle
  WarriorIdle1.playing = true;
  WarriorIdle2.playing = true;
  WarriorIdle3.playing = true;
  WarriorIdle4.playing = true;
  WarriorIdle5.playing = true;
  WarriorIdle6.playing = true;

  WarriorIdle1.looping = true;
  WarriorIdle2.looping = true;
  WarriorIdle3.looping = true;
  WarriorIdle4.looping = true;
  WarriorIdle5.looping = true;
  WarriorIdle6.looping = true;

  //WarriorIdleReverse
  WarriorIdleReverse1.playing = true;
  WarriorIdleReverse2.playing = true;
  WarriorIdleReverse3.playing = true;
  WarriorIdleReverse4.playing = true;
  WarriorIdleReverse5.playing = true;
  WarriorIdleReverse6.playing = true;

  WarriorIdleReverse1.looping = true;
  WarriorIdleReverse2.looping = true; 
  WarriorIdleReverse3.looping = true; 
  WarriorIdleReverse4.looping = true;
  WarriorIdleReverse5.looping = true;
  WarriorIdleReverse6.looping = true;

  //WarriorAttack
  WarriorAttack1.playing = true;
  WarriorAttack2.playing = true;
  WarriorAttack3.playing = true;
  WarriorAttack4.playing = true;
  WarriorAttack5.playing = true;
  WarriorAttack6.playing = true;
  WarriorAttack7.playing = true;
  WarriorAttack8.playing = true;
  WarriorAttack9.playing = true;

  WarriorAttack1.looping = false;
  WarriorAttack2.looping = false;
  WarriorAttack3.looping = false;
  WarriorAttack4.looping = false;
  WarriorAttack5.looping = false;
  WarriorAttack6.looping = false;
  WarriorAttack7.looping = false;
  WarriorAttack8.looping = false;
  WarriorAttack9.looping = false;

  WarriorAttack10.playing = true;
  WarriorAttack11.playing = true;
  WarriorAttack12.playing = true;

  WarriorAttack10.looping = false;
  WarriorAttack11.looping = false;
  WarriorAttack12.looping = false;

  //dying

  WarriorDie1.playing = true;
  WarriorDie2.playing = true;
  WarriorDie3.playing = true;
  WarriorDie4.playing = true;
  WarriorDie5.playing = true;
  WarriorDie6.playing = true;
  WarriorDie7.playing = true;
  WarriorDie8.playing = true;
  WarriorDie9.playing = true;
  WarriorDie10.playing = true;
  WarriorDie11.playing = true;

  WarriorDie1.looping = false;
  WarriorDie2.looping = false;
  WarriorDie3.looping = false;
  WarriorDie4.looping = false;
  WarriorDie5.looping = false;
  WarriorDie6.looping = false;
  WarriorDie7.looping = false;
  WarriorDie8.looping = false;
  WarriorDie9.looping = false;
  WarriorDie10.looping = false;
  WarriorDie11.looping = false;

  //SLIME
  //move
  slimeMove1.playing = true;
  slimeMove2.playing = true;
  slimeMove3.playing = true;
  slimeMove4.playing = true;

  slimeMove1.looping = true;
  slimeMove2.looping = true;
  slimeMove3.looping = true;
  slimeMove4.looping = true;

  //attack
  slimeATQ1.playing = true;
  slimeATQ2.playing = true;
  slimeATQ3.playing = true;
  slimeATQ4.playing = true;
  slimeATQ5.playing = true;

  slimeATQ1.looping = false;
  slimeATQ2.looping = false;
  slimeATQ3.looping = false;
  slimeATQ4.looping = false;
  slimeATQ5.looping = false;

  //die
  slimeDie1.playing = false;
  slimeDie2.playing = false;
  slimeDie3.playing = false;
  slimeDie4.playing = false;

  slimeDie1.looping = false;
  slimeDie2.looping = false;
  slimeDie3.looping = false;
  slimeDie4.looping = false;


}

function setup() {
  createCanvas(1536,270);
  frameRate(50);

  bg = createSprite(displayWidth/2-20,displayHeight/2-300,20,20);
  bg.addImage(bg_img);
  bg.scale = 1.1;

  textSize(40);
  text("VIDA: ", +WarriorLife, 80, 60);

  
  WarriorLife = createSprite(5,25);
  Sword = createSprite(displayWidth/2-10, displayHeight/2-206, 50, 5, 5);

  var parede1 = createSprite(4895, 0, 53, 1110);
  parede1.addAnimation("parede", parede1Img);
  parede1.scale = 3;

  var parede2 = createSprite(-3454,0,53,1110);
  parede2.addAnimation("parede", parede1Img);
  parede1.debug = true;
  parede1.setCollider("rectangle", 0, 0, 53, 1110, 0);
  parede2.scale = 3;
 

  Warrior = createSprite(5,displayHeight/2-215, 135);
  Warrior.scale = 2;
  //corrida
  Warrior.addAnimation('Running', WarriorRun1, WarriorRun2, WarriorRun3, WarriorRun4, WarriorRun5, WarriorRun6, WarriorRun7, WarriorRun8);
  //corrida do outro lado
  Warrior.addAnimation('ReverseRunning', WarriorRunReverse1, WarriorRunReverse2, WarriorRunReverse3, WarriorRunReverse4, WarriorRunReverse5, WarriorRunReverse6, WarriorRunReverse7, WarriorRunReverse8);
  //parada
  Warrior.addAnimation('Idling', WarriorIdle1, WarriorIdle2, WarriorIdle3, WarriorIdle4, WarriorIdle5, WarriorIdle6);
  //parada do outro lado
  Warrior.addAnimation('ReverseIdling', WarriorIdleReverse1, WarriorIdleReverse2, WarriorIdleReverse3, WarriorIdleReverse4, WarriorIdleReverse5, WarriorIdleReverse6);
  //Atacando
  Warrior.addAnimation("Attacking", WarriorAttack1, WarriorAttack2, WarriorAttack3, WarriorAttack4, WarriorAttack5, WarriorAttack6, WarriorAttack7, WarriorAttack8, WarriorAttack9);
  //Atacando2
  Warrior.addAnimation("Attacking2", WarriorAttack10, WarriorAttack11, WarriorAttack12);
  //Atacando2 do outro lado
  Warrior.addAnimation("ReverseAttacking2", WarriorReverseAttack1, WarriorReverseAttack2, WarriorReverseAttack3);

  Warrior.addAnimation('WDying', WarriorDie1, WarriorDie2, WarriorDie3, WarriorDie4, WarriorDie5, WarriorDie6, WarriorDie7, WarriorDie8, WarriorDie9, WarriorDie10, WarriorDie11);

  //colisor
  Warrior.debug = true;
  Warrior.setCollider("rectangle",-5, 3, 35, 20, 90);
  
  WarriorLife.addImage(WarriorLifeImg);

  WarriorLifeGroup = new Group();
  WarriorLifeGroup.add(WarriorLife);
  WarriorLife.scale = 0.07
  WarriorLife.x = camera.x


  //slime

  
  slime = createSprite(random(width/2, 1536), height -35);
  slime.debug = true;
  slime.setCollider("rectangle", 1,11,23,35,90);
  slime.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime.changeAnimation('Moving');
  slime.scale = 2.2;

  slime2 = createSprite(random(width/2, 1536), height -35);
  slime2.debug = true;
  slime2.setCollider("rectangle", 1,11,23,35,90);
  slime2.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime2.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime2.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime2.changeAnimation('Moving');
  slime2.scale = 2.2;

  slime3 = createSprite(random(width/2, 1536), height -35);
  slime3.debug = true;
  slime3.setCollider("rectangle", 1,11,23,35,90);
  slime3.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime3.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime3.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime3.changeAnimation('Moving');
  slime3.scale = 2.2;

  slime4 = createSprite(random(width/2, 1536), height -35);
  slime4.debug = true;
  slime4.setCollider("rectangle", 1,11,23,35,90);
  slime4.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime4.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime4.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime4.changeAnimation('Moving');
  slime4.scale = 2.2;

  slime5 = createSprite(1515, height -35);
  slime5.debug = true;
  slime5.setCollider("rectangle", 1,11,23,35,90);
  slime5.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime5.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime5.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime5.changeAnimation('Moving');
  slime5.scale = 2.2;

  slime6= createSprite(1516, height -35);
  slime6.debug = true;
  slime6.setCollider("rectangle", 1,11,23,35,90);
  slime6.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime6.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime6.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime6.changeAnimation('Moving');
  slime6.scale = 2.2;

  slime7 = createSprite(1536, height -35);
  slime7.debug = true;
  slime7.setCollider("rectangle", 1,11,23,35,90);
  slime7.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime7.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime7.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime7.changeAnimation('Moving');
  slime7.scale = 2.2;

  slime8 = createSprite( 2316, height -35);
  slime8.debug = true;
  slime8.setCollider("rectangle", 1,11,23,35,90);
  slime8.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime8.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime8.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime8.changeAnimation('Moving');
  slime8.scale = 2.2;

  slime9 = createSprite(1253, height -35);
  slime9.debug = true;
  slime9.setCollider("rectangle", 1,11,23,35,90);
  slime9.addAnimation('Moving', slimeMove1, slimeMove2, slimeMove3, slimeMove4);
  slime9.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime9.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime9.changeAnimation('Moving');
  slime9.scale = 2.2;


  slime10 = createSprite(-290, height -35);
  slime10.debug = true;
  slime10.setCollider("rectangle", 1,11,23,35,90);
  slime10.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime10.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime10.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime10.changeAnimation('Moving');
  slime10.scale = 2.2;

  slime11 = createSprite(-824, height -35);
  slime11.debug = true;
  slime11.setCollider("rectangle", 1,11,23,35,90);
  slime11.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime11.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime11.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime11.changeAnimation('Moving');
  slime11.scale = 2.2;

  slime12 = createSprite(-338, height -35);
  slime12.debug = true;
  slime12.setCollider("rectangle", 1,11,23,35,90);
  slime12.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime12.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime12.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime12.changeAnimation('Moving');
  slime12.scale = 2.2;

  slime13 = createSprite(-242, height -35);
  slime13.debug = true;
  slime13.setCollider("rectangle", 1,11,23,35,90);
  slime13.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime13.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime13.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime13.changeAnimation('Moving');
  slime13.scale = 2.2;

  slime14 = createSprite(-756, height -35);
  slime14.debug = true;
  slime14.setCollider("rectangle", 1,11,23,35,90);
  slime14.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime14.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime14.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime14.changeAnimation('Moving');
  slime14.scale = 2.2;

  slime15 = createSprite(-460, height -35);
  slime15.debug = true;
  slime15.setCollider("rectangle", 1,11,23,35,90);
  slime15.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime15.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime15.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime15.changeAnimation('Moving');
  slime15.scale = 2.2;

  slime16 = createSprite(-474, height -35);
  slime16.debug = true;
  slime16.setCollider("rectangle", 1,11,23,35,90);
  slime16.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime16.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime16.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime16.changeAnimation('Moving');
  slime16.scale = 2.2;

  slime17 = createSprite(-228, height -35);
  slime17.debug = true;
  slime17.setCollider("rectangle", 1,11,23,35,90);
  slime17.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime17.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime17.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime17.changeAnimation('Moving');
  slime17.scale = 2.2;

  slime18 = createSprite(-702, height -35);
  slime18.debug = true;
  slime18.setCollider("rectangle", 1,11,23,35,90);
  slime18.addAnimation('ReverseMoving', slimeReverseMove1, slimeReverseMove2, slimeReverseMove3, slimeReverseMove4);
  slime18.addAnimation('Dying', slimeDie1, slimeDie2, slimeDie3, slimeDie4);
  slime18.addAnimation('slimeAttacking', slimeATQ1, slimeATQ2, slimeATQ3, slimeATQ4, slimeATQ5);

  slime18.changeAnimation('Moving');
  slime18.scale = 2.2;

  slimeGroup = new Group();
  slimeGroup.add(slime);
  slimeGroup.add (slime2);
  slimeGroup.add(slime3);
  slimeGroup.add(slime4);
  slimeGroup.add(slime5);
  slimeGroup.add(slime6);
  slimeGroup.add(slime7);
  slimeGroup.add(slime8);
  slimeGroup.add(slime9);
  slimeGroup.add(slime10);
  slimeGroup.add(slime11);
  slimeGroup.add(slime12);
  slimeGroup.add(slime13);
  slimeGroup.add(slime14);
  slimeGroup.add(slime15);
  slimeGroup.add(slime16);
  slimeGroup.add(slime17);
  slimeGroup.add(slime18);

  
  Warrior.scale = 2;


  textSize(15);
}

function draw() {
  background(0);

  if(gameState = "play"){



    //espada

    Sword.x = Warrior.x

    //velocidade dos monstros
    slime.velocityX = -1;
    slime2.velocityX = -1;
    slime3.velocityX = -1;
    slime4.velocityX = -1;
    slime5.velocityX = -1;
    slime6.velocityX = -1;
    slime7.velocityX = -1;
    slime8.velocityX = -1;
    slime9.velocityX = -1;

    slime10.velocityX = 1;
    slime11.velocityX = 1;
    slime12.velocityX = 1;
    slime13.velocityX = 1;
    slime14.velocityX = 1;
    slime15.velocityX = 1;
    slime16.velocityX = 1;
    slime17.velocityX = 1;
    slime18.velocityX = 1;
    

    //camera
    WarriorLife.x = camera.x

//texto
textSize(40);
text("VIDA: ", +WarriorLife, 80, 60);

//movimentar o PC

//lado direito
if(keyDown("d")){

direction = 1
  Warrior.changeAnimation('Running');
  velocityX = 3
 if(!corridaSound.isPlaying()){
    corridaSound.play()
    corridaSound.setVolume(0.3);
 }

}


 
Warrior.x = Warrior.x + velocityX;
if (velocityX == 0){
  if(direction == 1){
    Warrior.changeAnimation("Idling");
    corridaSound.stop();
  }
  else{
    Warrior.changeAnimation("ReverseIdling");
    corridaSound.stop();
  }
}

//lado esquerdo

if(keyDown("a")){
  direction = -1
  velocityX = -3
  Warrior.changeAnimation('ReverseRunning');
  
  if(!corridaSound.isPlaying()){
    corridaSound.play()
    corridaSound.setVolume(0.3);
 }

  
}

//lado correto de acordo com a movimentação
if(!keyDown("a") && !keyDown("d")){
  velocityX = 0
}
camera.position.x = Warrior.position.x;



//Atacando
if(keyDown("space")){
   
  if(direction = 1){
  Warrior.changeAnimation('Attacking');
  }

  Warrior.velocityX = 0;
    Sword.debug = false;
    Sword.setCollider("rectangle", -5, 0, 100, 100, 90);
    Sword.x = Warrior.x
  if(!swordSound.isPlaying()){
    swordSound.play();
    swordSound.setVolume(0.4);


  }

  //dano

      if(slime.isTouching(Sword)){

      slime.destroy();
       
        }
        
      
          if(slime2.isTouching(Sword)){
    
          slime2.destroy();
           
            }

          

              if(slime3.isTouching(Sword)){
        
              slime3.destroy();
               
                }

               

                  if(slime4.isTouching(Sword)){
            
                  slime4.destroy();
                   
                    }

                    
                  if(slime5.isTouching(Sword)){
            
                    slime5.destroy();
                     
                      }

                      
                  if(slime6.isTouching(Sword)){
            
                    slime6.destroy();
                     
                      }

                      
                  if(slime7.isTouching(Sword)){
            
                    slime7.destroy();
                     
                      }

                      
                  if(slime8.isTouching(Sword)){
            
                    slime8.destroy();
                     
                      }

                      
                  if(slime9.isTouching(Sword)){
            
                    slime9.destroy();
                     
                      }

                      if(slime18.isTouching(Sword)){
            
                        slime18.destroy();
                         
                          }

                          if(slime10.isTouching(Sword)){
            
                            slime10.destroy();
                             
                              }

                              if(slime11.isTouching(Sword)){
            
                                slime11.destroy();
                                 
                                  }

                                  if(slime12.isTouching(Sword)){
            
                                    slime12.destroy();
                                     
                                      }

                                      if(slime13.isTouching(Sword)){
            
                                        slime13.destroy();
                                         
                                          }

                                          if(slime14.isTouching(Sword)){
            
                                            slime14.destroy();
                                             
                                              }

                                              if(slime15.isTouching(Sword)){
            
                                                slime15.destroy();
                                                 
                                                  }

                                                  if(slime16.isTouching(Sword)){
            
                                                    slime16.destroy();
                                                     
                                                      }

                                                      if(slime17.isTouching(Sword)){
            
                                                        slime17.destroy();
                                                         
                                                          }
                    
                
            
    
  //animaçao do ataque
 Warrior.changeAnimation('Attacking2');
 Warrior.frameDelay = 20
 Warrior.velocityX = 0;

  
}
  }

  if(gameState = "end"){

if(slimeGroup.isTouching(Warrior)){
  Warrior.changeAnimation('WDying');

  gameOver = createImg('gameOver.png');
  gameOver.position(300, 50);
  gameOver.size(960, 190);
  gameOver.scale = 1;


  restart = createImg('restart.png');
  restart.position(10, 10);
  restart.size(60,60);
  restart.mouseClicked(reset);

bg.destroy();
Warrior.destroy();
Sword.destroy();
slime.destroy();
slime2.destroy();
slime3.destroy();
slime4.destroy();
slime5.destroy();
slime6.destroy();
slime7.destroy();
slime8.destroy();
slime9.destroy();
slime10.destroy();
slime11.destroy();
slime12.destroy(); 
slime13.destroy();
slime14.destroy();
slime15.destroy();
slime16.destroy();
slime17.destroy();
slime18.destroy();
WarriorLife.destroy();
gameOverSound.play();

      }

   }
  
  drawSprites();
  }

function reset(){
  location.reload();
}
