let message = [];
let num_message = [];
let num_encryption = [];

function preload(){
    //myimage = loadImage("images/mypic.png")
}//end preloading of images

function setup() {
	let sketch = createCanvas(600, 400);
    sketch.parent("mycanvas");
    background(255);

  message = split(prompt('what is your message'), '')

  num_message = unchar(message)
  
  for (let i = 0; i < num_message.length; i++) {
    if(num_message[i] === 32) {
      num_message[i] = 64
    }
    num_message[i] -= 63
  }
  
  num_encryption[0] = num_message[0]
  num_encryption[1] = (num_message[1] - num_message[0])%27
  
  for(let i = 1; i < num_message.length -1; i++) {
    num_encryption[i+1] = (num_message[i+1] - num_encryption[i])%27
  }

  for (let i = 0; i < num_message.length; i++) {
    num_encryption[i] += 63
    
    
    if(num_encryption[i] < 64) {
      num_encryption[i] += 27
    }
    if(num_encryption[i] === 59) {
      num_encryption[i] = 32
    }
    if(num_encryption[i] === 64) {
      num_encryption[i] = 32
    }
  }
  textSize(20)
  text(join(char(num_encryption), ''), 10, 30)
}//end setup

function mousePressed() {
  fill(0)
  
  text(join(num_encryption), 10, 60)
}