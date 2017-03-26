var socket;
var but;

function setup() {
  createCanvas(400, 400);
  background(0);

  socket = io.connect('http://localhost:3000');

  but = createButton("Conectar Arduino");
  but.position(20, 420);
  but.mousePressed(conectar);

  socket.on('noArduino', function(data){
    console.log("Imposible conectar");
  })
}

function conectar(){
  socket.emit('arduino', {id: "COM3"});
}
