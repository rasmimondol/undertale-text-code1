var BB, BM, A, F, GO, ActNI, ActUI, FightNI, FightUI, ItemNI, ItemUI, MercyNI, MercyUI, FM, PI;
var gameState = "your turn";


function preload(){
BB = loadImage("Undertale Assests/Backgrounds.png");
BM = loadImage("Undertale Assests/Battle Menus.png");
A = loadImage("Undertale Assests/Attack.png");
F = loadImage("Undertale Assests/Fonts.png");
GO = loadImage("Undertale Assests/Game Over.png");
FM = loadImage("Undertale Assests/Fight bar.png");
//ActNI = loadImage("Undertale Assests/Act(NI).jpg");
//ActUI = loadImage("Undertale Assests/Act(UI).jpg");
//FightNI = loadImage("Undertale Assests/Fight(NI).jpg");
//FightUI = loadImage("Undertale Assests/Fight(UI).jpg");
//ItemNI = loadImage("Undertale Assests/Item(NI).jpg");
//ItemUI = loadImage("Undertale Assests/Item(UI).jpg");
//MercyNI = loadImage("Undertale Assests/Mercy(NI).jpg");
//MercyUI = loadImage("Undertale Assests/Mercy(UI).jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 35, displayHeight-150);
  bg = createSprite(width/2, height/2 - 150);
  bg.addImage(BB);
  bg.scale = 1.5

act = createImg("Undertale Assests/Act(NI).jpg");
act.position(width/2 - 200, height - 70);
act.size(125,60)
fight = createImg("Undertale Assests/Fight(IU).jpg");
fight.position(width/2 - 500, height - 70);
fight.size(125,60)
item = createImg("Undertale Assests/Item(NI).jpg");
item.position(width/2 + 100, height - 70);
item.size(125,60)
mercy = createImg("Undertale Assests/Mercy(NI).jpg");
mercy.position(width/2 + 350, height - 70);
mercy.size(125,60)
player = createImg("Undertale Assests/Player.png");
player.position(width/2 + 350, height - 70);
player.size(100,50)


}


function draw(){
  background("black");
if(gameState == "your turn"){
  if(keyDown("A")){
    var x = 1;
    if(x == 1){
      fight = createImg("Undertale Assests/Fight(NI).jpg");
      fight.position(width/2 - 500, height - 70);
      fight.size(125,60);
      mercy = createImg("Undertale Assests/Mercy(IU).jpg");
      mercy.position(width/2 + 350, height - 70);
      mercy.size(125,60)
      x = 2;
    }
    else if(x == 2){
      mercy = createImg("Undertale Assests/Mercy(NI).jpg");
      mercy.position(width/2 + 350, height - 70);
      mercy.size(125,60)
      item = createImg("Undertale Assests/Item(IU).jpg");
      item.position(width/2 + 100, height - 70);
      item.size(125,60)
    }
  }
}
drawSprites();
}

