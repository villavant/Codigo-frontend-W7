// let promesa = new Promise((resolve, reject) => {
//   if (condicion) {
//     resolve("Has algo aca");
//   } else {
//     reject("no funciona");
//   }
// });

// Las promesas tienen tres estados

// 1.Pendiente
// 2.Resuelta
// 3.Rechazada

let operacion_function = function (x, y, operacion) {
  return new Promise((resolve, reject) => {
    let resultado;
    switch (operacion) {
      case "+":
        resultado = x + y;
        break;
      case "-":
        resultado = x - y;
        break;
      case "*":
        resultado = x * y;
        break;
      case "/":
        resultado = x / y;
        break;
    }
    let suma = x + y;

    if (resultado) {
      resolve(resultado);
    } else {
      reject(Error("Error, operación inválida"));
    }
  });
};

let operacion = "+";
let valor_1 = 2;
let valor_2 = 3;
let resultado = operacion_function(valor_1, valor_2, operacion);
console.log(`Valor 1 :${valor_1}
valor 2: ${valor_2}
operación: ${operacion}`);
console.log("resultado: " + resultado);

let resultadoConsole = (valor_1, valor_2, operacion, resultado) => {
  console.log(`Valor 1 :${valor_1}
    valor 2: ${valor_2}
    operación: ${operacion}`);
  console.log("resultado: " + resultado);
};

operacion_function(valor_1, valor_2, operacion)
  .then((resultadoSuma) => {
    resultadoConsole(valor_1, valor_2, operacion, resultadoSuma);
    return operacion_function(resultadoSuma, valor_2, "-");
  })
  .then((resultadoResta) => {
    resultadoConsole(valor_1, valor_2, "-", resultadoResta);
    return operacion_function(resultadoResta, valor_2, "*");
  })
  .then((resultadoMultiplicacion) => {
    resultadoConsole(valor_1, valor_2, "*", resultadoMultiplicacion);
    return operacion_function(resultadoMultiplicacion, valor_2, "/");
  })
  .catch((error) => {
    console.log("Error Try Catch");
  });

const binomio = (a, b) => {
  function parte1() {
    return new Promise((resolve, reject) => {
      let primerFactor = a**2;
      primerFactor
        ? resolve(primerFactor)
        : reject(Error("No es una operación válida"));
    });
  }

  function parte2() {
    return new Promise((resolve, reject) => {
      let segundoFactor = 2*a*b;
      segundoFactor
        ? resolve(segundoFactor)
        : reject(Error("No es una operación válida"));
    });
  }
  function parte3() {
    return new Promise((resolve, reject) => {
      let tercerFactor = b**2;
      tercerFactor
        ? resolve(tercerFactor)
        : reject(Error("No es una operación válida"));
    });
  }

  return parte1().then((resultadoParte1) => {
    //   return resultadoParte1 + parte2()
    parte2().then((resultadoParte2) => {
      parte3().then((resultadoParte3) => {
        console.log("Resultado: " + (resultadoParte1 + resultadoParte2 + resultadoParte3));
        console.log(resultadoParte1);
        console.log(resultadoParte2);
        console.log(resultadoParte3);
      });
    });
  });
};

binomio(2, 2);
