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
  for(let i = 1; i < num_message.length; i++) {
    num_encryption[i] = (num_message[i] + num_message[i-1])%27
  }

  for (let i = 0; i < num_message.length; i++) {
    num_encryption[i] += 63
    
    if(num_encryption[i] === 64) {
      num_encryption[i] = 32
    }
    
  }

}//end setup

function draw() {
  text(join(char(num_encryption), ''), 40, 30)
}


