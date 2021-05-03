var bgimg;
var cat,catimg1,catimg2;
var mouse,mouseimg1,mouseimg2
var catimg3,mouseimg3

function preload() {
    //load the images here
    bgimg=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat1.png")
    mouseimg1=loadAnimation("images/mouse1.png")
    catimg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg3=loadAnimation("images/cat4.png")
    mouseimg3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,700)
    cat.addAnimation("standing",catimg1)
    cat.scale=0.2;
    cat.addAnimation("walking",catimg2)
    cat.addAnimation("collided",catimg3)

    mouse=createSprite(100,700)
    mouse.addAnimation("standing",mouseimg1)
    mouse.addAnimation("teasing",mouseimg2)
    mouse.scale=0.15;
    mouse.addAnimation("collided",mouseimg3)
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.changeAnimation("collided",catimg3)
        mouse.changeAnimation("collided",mouseimg3)
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW)
{
    cat.changeAnimation("walking",catimg2);
    cat.x=cat.x-25
    cat.scale=0.2
}

if(keyCode === RIGHT_ARROW)
{
    mouse.changeAnimation("teasing",mouseimg2);
    mouse.framedelay = 25;
}

}