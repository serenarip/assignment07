var mic;
var wave;
var kid;

function preload() {
    wave = loadImage("/assets/wave.png");
    kid = loadImage("/assets/kid.png");
}
function setup() {
  createCanvas(500,500);
  
  angleMode(DEGREES);
  // create a new instance of audio input
  mic = new p5.AudioIn();
  
  // start to listen to the audio
  mic.start();
  

}

function draw() {
    
  background('lightblue');
  
  image(wave, -200,50,700,500); 
    var a = true;
  if (a == true) {
  var y = frameCount;
      }
  if (a == false) {
      y = 50;
  }
  
 
   
    
  if (y > 500) {
      
      fill('black');
      rect(0,0,500,500);
      
      fill('white');
      textSize(20);
      text("You couldn't save the kid.", 150, 400);
  }
  
    var vol = mic.getLevel();
  
  console.log(vol);
  
  if (vol > 0.1 && vol < 0.3) {
      y = y - 50;
      a = false;
      
  }
  else if (vol > 0.3) {
       y = y - 500;
  }
  
  image(kid, 200, y,100,125);
  
  
   textSize(20);
      fill('black');
      text("Make some noise to save the kid.", 100, 450);
    
  


}