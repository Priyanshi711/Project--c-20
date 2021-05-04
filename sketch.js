var bgImg;
var cat;
var rat;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadImage("cat1.png");
    ratImg1 = loadImage("mouse1.png");
    catImg2 = loadImage("cat2.png","cat3.png");
    ratImg2 = loadImage("mouse2.png","mouse3.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide


if(cat.x - rat.x < (cat.width - rat.width)/2){
    
    cat.VelocityX = 0;


}




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW);{
      rat.addAnmation("mouseTeasing",ratImg2);
      rat.changeAnimation("mouseTeasing");
      rat.frameDelay = 25;

  }

  f(keyCode === LEFT_ARROW);{
    cat.addAnmation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
    cat.frameDelay = 25;

}


}
