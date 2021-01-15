var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
     
    //create 4 different surfaces
   
    rectangle=createSprite(10,400,200,20)
    rectangle.shapeColor = "red";
    rectangle1=createSprite(400,400,200,20)
    rectangle1.shapeColor = "blue";
    rectangle2=createSprite(160,400,100,20)
    rectangle2.shapeColor = "yellow";
    rectangle3=createSprite(250,400,100,20)
    rectangle3.shapeColor = "green";
    ball=createSprite(100,10,20,20)
    ball.shapeColor="black";
    ball.velocityY=7;
  
}

function draw() {
    background(rgb(169,169,169));
   
  touch();
    drawSprites();

    //add condition to check if box touching surface and make it box
}
function touch(){
if(ball.y-rectangle.y<rectangle.width/2+ball.width/2)  {
ball.shapeColor="black";
    ball.shapeColor="red";
ball.bounceOff(rectangle );

}


if(ball.y-rectangle1.y<rectangle1.width/2+ball.width/2)  {
    
    ball.shapeColor="black";
    ball.shapeColor="blue";
    ball.bounceOff(rectangle1 );
    
    }
    if(ball.y-rectangle2.y<rectangle2.width/2+ball.width/2)  {
        ball.shapeColor="black";
         ball.shapeColor="yellow";
        ball.bounceOff(rectangle2 );
        
        }
        if(ball.y-rectangle3.y<rectangle3.width/2+ball.width/2)  {
            ball.shapeColor="black";
             ball.shapeColor="green";
            ball.bounceOff(rectangle3);
            
            }
}