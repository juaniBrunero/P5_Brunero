
var express = require('express');
var SerialPort = require('serialport');

var app = express();

var server = app.listen(process.env.PORT || 3000, listen);

var serialport;

function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public'));

var io = require('socket.io')(server);


io.sockets.on('connection',

  function (socket) {

    console.log("We have a new client: " + socket.id);

    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('mouse',
      function(data) {
        // Data comes in as whatever was sent, including objects
        console.log("Received: 'mouse' " + data.x + " " + data.y);

        // Send it to all other clients
        socket.broadcast.emit('mouse', data);

        // io.sockets.emit('message', "this goes to everyone");
      }
    );

   socket.on('arduino',

    function(data){
        serialport = new SerialPort("COM4", { baudrate: 9600 });

        serialport.on('open', function(){
          console.log('Serial Port Opend');
          serialport.on('data', function(data){
              console.log(data[0]);
          });

          serialport.on('close', function(){
              console.log('Out');
          })
        });
      }
      );

    socket.on('disconnect', function() {
      if(serialport.isOpen())serialport.close();
      console.log("Client has disconnected");
    });
  }
);
