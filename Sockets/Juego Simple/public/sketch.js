var socket;

var x;
var y;

var data;

function setup() {
  createCanvas(600, 600);

  x = width/2;
  y = height/2;

  socket = io.connect('http://localhost:3000');

  socket.on('heartbeat',
    function(data) {
      console.log(data);
    }
  );

  socket.on('show',
    function(data) {
      console.log(data);
      x = data.x;
      y = data.y;
    }
  );
}

function draw() {
  background(51);
  fill(255);
  noStroke();
  ellipse(x, y, 10, 10);
  if(mouseIsPressed){
    var direc = createVector(mouseX - x, mouseY - y);

    var data = {
      x: direc.x,
      y: direc.y
    };

    socket.emit('update', data);
  }
}
