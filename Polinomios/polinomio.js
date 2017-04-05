function Polinomio(){
  this.cf = [];
}

Polinomio.prototype.mostrar = function () {
  var txt = "";
  var ant = false;
  for (var i = this.cf.length-1; i >= 0; i--) {
    if(!this.cf[i].mostarNum() === false){
      if(i != this.cf.length-1)if(ant)txt += "+ ";
      if(i != 0){
        txt += this.cf[i].mostarNum() + "X^" + i;
      }else{
        txt += this.cf[i].mostarNum();
      }
      txt += " ";
      ant = true;
    }
  }
  return txt;
}

function Numero(re, im=0){
  this.a = re;
  this.i = im;
}

Numero.prototype.mostarNum = function () {
  var txt = "";
  if(this.a == 0 && this.i == 0){
    return false;
  }else{
    if(this.a != 0){
      txt += this.a + " ";
    }
    if(this.i != 0){
      txt += "(" + txt + this.i + "i)";
    }
    return txt;
  }
}

function sumarPol(p1, p2){
  var pN = new Polinomio();
  var i = 0;
  while(p1.cf[i] != undefined || p2.cf[i] != undefined){
    var suma = 0;
    if(p1.cf[i] == undefined){
      suma = p2.cf[i];
    }else if(p2.cf[i] == undefined){
      suma = p1.cf[i];
    }else{
      suma = sumaNum(p1.cf[i], p2.cf[i]);
    }
    pN.cf.push(suma);

    i++;
  }

  return pN;
}

function sumaNum(a, b){
  c = new Numero(a.a + b.a, a.i + b.i);
  return c;
}
