var serial; // variable to hold an instance of the serialport library

function setup() {
  console.log("A");
 serial = new p5.SerialPort(); // make a new instance of the serialport library
 serial.on('list', printList); // set a callback function for the serialport list event
console.log("A");
 serial.list(); // list the serial ports

 serial.open("COM4");
 console.log("A");
}

// get the list of ports:
function printList(portList) {
  console.log("A");
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
   console.log(portList[i]);
 }
}
