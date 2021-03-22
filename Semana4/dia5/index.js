let a = 2;
let b = 8;
let c = 3;
// let result1 = ((-b) + ((((b ** 2) - (4 * a * c)) ** 0.5))) / (2 * a);
// let result2 = ((-b) - ((((b ** 2) - (4 * a * c)) ** 0.5))) / (2 * a);

function getCuadrante(a, b, c) {
  let resultado = (-b + (b ** 2 - 4 * a * c) ** 0.5) / (2 * a);
  return resultado;
}

let text = `Las variables son ${a} - ${b} - ${c}`;
const tittle = document.getElementById("tittle");
const resultado = document.getElementById("resultado");
tittle.textContent = text;
resultado.textContent = getCuadrante(a, b, c);

//Recusividad - bucle - while

let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}

let contador2 = 0;
function recursividad(contador) {
  if (contador >= 10) {
    return;
  } else {
    console.log(contador);
    contador++;
    recursividad(contador);
  }
}

recursividad(contador2);

// Funcion anidada

function sumarCuadrado(a, b) {
  function potencia2(x) {
    return x * x;
  }
  return potencia2(a) + potencia2(b);
}

console.log(sumarCuadrado(5, 6));

const binomio_de_newton_4 = function binomio_cuarta(a, b) {
  function suma_cuarta(a, b) {
    return a ** 4 + b ** 4;
  }
  function suma_cubo(a, b) {
    return 4 * (a ** 3 * b) + 4 * (a * b ** 3);
  }
  function multi_cuadrado(a, b) {
    return 6 * (a ** 2 * b ** 2);
  }

  return suma_cuarta(a, b) + suma_cubo(a, b) + multi_cuadrado(a, b);
};

console.log(binomio_de_newton_4(2,3));




const add = ( function (){
    var counter=0;
    return function(){counter +=1; return counter}

})();

console.log(add())

console.log(add())
console.log(add())
