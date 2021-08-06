var box=createSprite(200,200,10,10);

function setup() {
  createCanvas(400,400);
  background(30);
var box= createSprite(200,200,10,10);
box.scale = 1;
}

function draw() 
{
 if(keyIsDown(DOWN_ARROW))
{
  background ('blue')
}

if(keyIsDown(RIGHT_ARROW))
{
  background ('green')
}

if (keyIsDown(LEFT_ARROW))
{
  background('red')
}

if(keyIsDown(UP_ARROW))
{
  background('yellow')
}

drawSprites()

}




