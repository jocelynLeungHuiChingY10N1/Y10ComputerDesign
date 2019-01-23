function setup()
{
  //create a drawing service 700px wide, 500px tall
  // (length and height of the canvas)
  createCanvas(800,400);


}

function draw()
{
  //create a background using RGB values
  // I worked with Charles to create different background colours (such as
  salmon pink,red, green, yellow)

  background red(255,0,0)

  background salmon pink(250,128,114)

  background dark olive green (85,107,47)

  background yellow (255,255,0)
  

  // change the paint brush to a specific color according to RGB values
  // (amount of paint dipped in)
  fill(213,306,0);


  rect(100,225,500,50)
  rect(100,225,500,50)

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50


  rect(700/2-500,500/2,50/2,500,50);
  rect(200,40,60,80)
  rect(100,50,250,10)
  rect(300,20,25,10)
  rect(400,30,50,70)
  rect(500,40,20,60)
  rect(600,10,100,50)
  rect(700,31,80,90)
  rect(800,11,29,100)
  rect(900,80,90,100)
  rect(100,300,500,700)
  rect(200,400,600,800)
  rect(300,12,24,400)
  rect(1000,900,800)
}
