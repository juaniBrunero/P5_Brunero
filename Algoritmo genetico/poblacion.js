function Poblacion(){
  this.puntos = [];
  this.mutar = 0;
  this.llega = 0;
  this.cant = 0;
  this.max = 0;
  this.min = 0;
  this.avr = 0;
}

Poblacion.prototype.generar = function(llegar, cant, mutacion){
  this.mutar = mutacion;
  this.cant = cant;
  this.llega = llegar;
  this.puntos = new Array(cant);
  for (var i = 0; i < this.puntos.length; i++) {
    this.puntos[i] = new Array(cant);
    for (var j = 0; j < this.puntos[i].length; j++) {
      this.puntos[i][j] = new Objeto(20 + i*20, 20 + j*20);
    }
  }
}

Poblacion.prototype.mostrar = function(){
  for (var i = 0; i < this.puntos.length; i++) {
    for (var j = 0; j < this.puntos[i].length; j++) {
      if(this.puntos[i][j].gen-4 < this.llega || this.puntos[i][j].gen+4 > this.llega){
        this.puntos[i][j].mostrar(255);
      }else{
        this.puntos[i][j].mostrar(255, 0, 255);
      }
    }
  }
}

Poblacion.prototype.calcPuntaje = function(){
  this.max = 255.0;
  this.min = 0.0;
  for (var i = 0; i < this.puntos.length; i++) {
    for (var j = 0; j < this.puntos[i].length; j++) {
      if(this.puntos[i][j].fitness(this.llega) < this.max){
        this.max = this.puntos[i][j].fitness(this.llega);
      }
      if(this.puntos[i][j].fitness(this.llega) > this.min){
        this.min = this.puntos[i][j].fitness(this.llega);
      }
    }
  }
  this.avr = 0;
  for (var i = 0; i < this.puntos.length; i++) {
    for (var j = 0; j < this.puntos[i].length; j++) {
      this.puntos[i][j].fit = map(this.puntos[i][j].fitness(this.llega), this.min, this.max, 0.0, 1.0);
      this.avr += this.puntos[i][j].fit;
    }
  }
}

Poblacion.prototype.maximo = function(){
  return this.min;
}

Poblacion.prototype.promedio = function(){
  return ((100*this.avr) / (this.cant*this.cant));
}

Poblacion.prototype.reproducir = function(mut){
  this.mutar = mut;
  var nPuntos = new Array(this.puntos.length);
  for (var i = 0; i < this.puntos.length; i++) {
    nPuntos[i] = new Array(this.puntos[i].length);
    for (var j = 0; j < this.puntos[i].length; j++) {
      if(this.puntos[i][j].gen-4 < this.llega || this.puntos[i][j].gen+4 > this.llega){
        var progenitor1 = this.seleccionar(i, j);
        var progenitor2 = this.seleccionar(i, j);

        var nuevoObjeto = this.crearNuevo(i, j, progenitor1, progenitor2);
        nPuntos[i][j] = nuevoObjeto;
      }else{
        nPuntos[i][j] = this.puntos[i][j];
      }
    }
  }
  this.puntos = nPuntos;
}

Poblacion.prototype.crearNuevo = function(i, j, a, b){
  var nuevo = new Objeto(20 + i*10, 20 + j*10);
  var r = random(1.0);
  if(a.fit > b.fit){
    if(r < 0.5){
      nuevo.gen = a.gen + 0;
    }else{
      nuevo.gen = b.gen - 0;
    }
  }
  if(b.fit > a.fit){
    if(r < 0.5){
      nuevo.gen = b.gen + 0;
    }else{
      nuevo.gen = a.gen - 0;
    }
  }

  nuevo.gen = constrain(nuevo.gen, 0, 255);
  if(random(1.0) < min(255/nuevo.gen, this.mutar)){
    this.mutacion(nuevo);
  }
  return nuevo;
}

Poblacion.prototype.mutacion = function(obj){
  var cant = random(-0.5, 0.5);
  obj.gen += cant;
  obj.gen = constrain(obj.gen, 0, 255);
}

Poblacion.prototype.cantidad = function(trs){
  var cF = 0;
  for (var i = 0; i < this.puntos.length; i++) {
    for (var j = 0; j < this.puntos[i].length; j++) {
      if(this.puntos[i][j].gen > trs){
        cF++;
      }
    }
  }
  return cF;
}

Poblacion.prototype.seleccionar = function(i, j){
  var ni;
  var nj;
  var error = 0;
  var encontro = false;
  while(!encontro && error < 100){
    ni1 = floor(random(i));
    nj1 = floor(random(j));
    nFit = random(0, pow(2, this.max));
    if(pow(2, this.max * this.puntos[ni1][nj1].fit) > nFit)encontro = true;
    error++;
  }
  return this.puntos[ni1][nj1];
}
