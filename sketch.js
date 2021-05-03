var canvas;
var music;
var block1,block2,block3,block4,ball;
//var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    edges=createEdgeSprites
    block1=createSprite(50,390,100,18)
    block1.shapeColor="blue"
    block2=createSprite(150,390,100,18)
    block2.shapeColor="yellow"
    block3=createSprite(250,390,100,18)
    block3.shapeColor="red"
    block4=createSprite(350,390,100,18)
    block4.shapeColor="green"

    //create 4 different surfaces
    ball=createSprite(250,300,20,20)
    ball.shapeColor="white"
    ball.velocityX=2
    ball.velocityY=2
    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    drawSprites()
   
    //create edgeSprite
   
    edges=createEdgeSprites
   // ball.bounceOff(edges)

    //add condition to check if box touching surface and make it box
}
