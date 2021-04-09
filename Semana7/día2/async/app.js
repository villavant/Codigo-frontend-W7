// async function fun_asincrona() {
//   return 23;
// }

// // funcion arrow asincrona
// const otrafuncion = async () => 42;

// console.log(fun_asincrona());

// fun_asincrona().then((valor) => {
//   console.log("Este es el valor de la promesa ", valor);
// });

// const valor = otrafuncion();
// console.log(valor);

// async function obtenerValor() {
//   const value = await otrafuncion();
//   return value;
// }

// console.log(obtenerValor);

// const binomio = async (a, b) => {
//   async function primerFactor() {
//     let primerFactor = a ** 2;
//     primerFactor ? primerFactor : Error("No es una operación válida");
//   }

//   async function segundoFactor() {
//     let segundoFactor = 2 * a * b;
//     segundoFactor ? segundoFactor : Error("No es una operación válida");
//   }
//   async function tercerFactor() {
//     let tercerFactor = b ** 2;
//     tercerFactor ? tercerFactor : Error("No es una operación válida");
//   }

//   let resultado1 = await primerFactor();
//   let resultado2 = await segundoFactor();
//   let resultado3 = await tercerFactor();

//   return `Resultado:${resultado1 + resultado2 + resultado3})`;
// };

// console.log(binomio(2, 3));

// const nombreCompleto = async (
//   prPriNombre,
//   prSegNombre,
//   prApellidoPaterno,
//   prApellidoMaterno
// ) => {
//   const nombre = {
//     primerNombre: prPriNombre,
//     segundoNombre: prSegNombre,
//     primerApellido: prApellidoPaterno,
//     segundoApellido: prApellidoMaterno,
//   };
//   async function devolverPrimerNombre() {
//     return nombre.primerNombre;
//   }
//   async function devolverSegundoNombre() {
//     return nombre.segundoNombre;
//   }
//   async function devolverPrimerApellido() {
//     return nombre.primerApellido;
//   }
//   async function devolverSegundoApellido() {
//     return nombre.segundoApellido;
//   }

//   const pNombre = await devolverPrimerNombre();
//   const sNombre = await devolverSegundoNombre();
//   const pApellido = await devolverPrimerApellido();
//   const sApellido = await devolverSegundoApellido();

//   const resultado = async () => {
//     return `Mi nombre es : ${pNombre} ${sNombre} ${pApellido} ${sApellido}`;
//   };

//   const nombreFinal = await resultado();

//   return nombreFinal;
// };

// let x = nombreCompleto("Jorge", "Enrique", "Villavicencio", "Antunez");
// x.then((valor) => console.log(valor));
// x = async (valor1) => {
//   console.log(valor1);
// };
// console.log(x);

const binomioTrinomio = async (a, b, c) => {
  async function potencia(x) {
    let lPotencia = x ** 2;
    lPotencia ? lPotencia : Error("No es una operación potencia");
  }

  async function combinacion(x, y) {
    let lCombinacion = 2 * x * y;
    lCombinacion ? lCombinacion : Error("No es una operación combinacion");
  }

  const aPotencia = await potencia(a);
  const bPotencia = await potencia(b);
  const cPotencia = await potencia(c);
  const combAB = await combinacion(a, b);
  const combAC = await combinacion(a, c);
  const combBC = await combinacion(b, c);

  console.log(aPotencia);

  //     const resultado = async () => {
  //         return `resultado: ${
  //             aPotencia + bPotencia + cPotencia + combAB + combAC + combBC
  //           }`;
  //   };

  //   const nombreFinal = await resultado();

  return `resultado: ${
    aPotencia + bPotencia + cPotencia + combAB + combAC + combBC
  }`;
};

let a = 1;
let b = 1;
let c = 1;
const resultado = binomioTrinomio(a, b, c);
console.log(resultado);
resultado.then((valor) => console.log(valor));
