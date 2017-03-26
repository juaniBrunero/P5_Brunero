var cols;
var rows;

var grid = new Array(cols);

var openSet = [];
var closedSet = [];

var start;
var end;

var w = 20;

var path = [];

var current;

var stack = [];

var labe = false;

var emp;

var arranco = false;

function setup() {
  createCanvas(800, 600);

  var st = createVector(0, 0);
  var fn = createVector(floor(width/w)-1, floor(height/w)-1);

  cols = floor(width/w);
  rows = floor(height/w);

  emp = createButton("Empezar");
  emp.position(20, 620);
  emp.mousePressed(arrancar);

  setUpL(st.x, st.y, fn.x, fn.y);

}

function draw() {

  labe = notAllVisited(grid);

  if(labe){

    generarLabe(grid);

  }else if(arranco){

    resolverL(grid);

  }
}

function arrancar(){
  arranco = true;
}
