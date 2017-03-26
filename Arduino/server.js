
var express = require('express');
var SerialPort = require('serialport');

var app = express();

var server = app.listen(process.env.PORT || 3000, listen);

var serialport;
var abierto = "";

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

var io = require('socket.io')(server);


io.sockets.on('connection',

  function (socket) {

  console.log("cliente nuevo: " + socket.id);
  // socket.emit('message', "only me");
  // socket.broadcast.emit('message', "everyone not me");
  // io.sockets.emit('message', "this goes to everyone");
  socket.on('arduino', function(data){
    SerialPort.list(function (err, ports) {
    var disponible = false;
    ports.forEach(function(port) {
      disponible = (port.comName == data.id) || disponible;
      });
      if(disponible){
        conectar(data.id);
        break;
      }
    });
  });

  socket.on('disconnect', function() {
    console.log("Client has disconnected");
  });
  }
);

function conectar(id){
  if(!id == abierto){
    serialport = new SerialPort(id, { baudrate: 9600 });
    serialport.on('open', function(){
      console.log('Serial Port Open at: ' + id);
      serialport.on('data', function(data){
        console.log(data[0]);
      });

      serialport.on('close', function(){
        abierto = "";
        console.log('Puerto desconectado');
      });
    });
    abierto = id;
  }else{
    console.log("Puerto ya abierto");
  }
}
