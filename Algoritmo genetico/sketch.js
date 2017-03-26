var cant = 40;

var mutacion = 0.2;

var poblacion;

var final = 0;

var cFinal;

var llegar = 125;

var mutacionSlider;
var empezarBot;

function setup() {
  createCanvas(430, 430);

  poblacion = new Poblacion();

  poblacion.generar(llegar, cant, mutacion);

  //mutacionSlider = createSlider(0, 1.0);
  //mutacionSlider.position(20, 450, 0.2);

  // empezarBot = createButton("Empezar");
  // empezarBot.position(20, 470);
  // empezarBot.mousePressed(empezar);

}

function draw() {
  background(0);

  poblacion.mostrar();
  poblacion.calcPuntaje();
  poblacion.reproducir(mutacion);
  cFinal = poblacion.cantidad(240);
  final++;
  if(final  % 25 == 0){
    console.log("Generaciones: " + final);
    console.log("Puntaje maximo: " + poblacion.maximo());
    console.log("Puntaje promedio: " + poblacion.promedio());
    mutacion = (poblacion.promedio()/255);
  }
  if(final > 10000 || cFinal > (cant*cant*0.8)){
    console.log("Termino");
    console.log("Cantidad total: " + cant*cant);
    console.log("Cantidad de cierre: " + cant*cant*0.8);
    console.log("Cantidad de finalizados: " + cFinal + " " + floor((cFinal/(cant*cant))*100) + "%");
    console.log("Cantidad de generaciones: " + final);
    noLoop();
  }
}

function empezar(){
  mutacion = mutacionSlider.value();

  poblacion = new Poblacion();

  poblacion.generar(cant, mutacion);

}
