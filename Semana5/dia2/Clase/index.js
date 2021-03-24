// // Cadenas de textos(strings)

// // Cada letra, número, simbolo que vayta dentro de unas comillas (simples, dobles, invertidas), se consideran un caracter
// // y una secuencia de caracteres es una cadena de texto
// const cadenaTexto = "Esta es una cadena de caracteres";
// let otraCadenaTexto = "Esta es otra cadena de texto";

// const otraCadenaTextoObjeto = new String("Esta es una cadena de caracteres");

// console.log(typeof otraCadenaTexto, "|1|");
// console.log(typeof otraCadenaTextoObjeto, "|2|");

// const titulo1 = document.querySelector("h1");
// const titulo2 = document.querySelector("h2");
// const titulo3 = document.querySelector("h3");

// titulo1.textContent = typeof otraCadenaTexto;

// titulo2.textContent = typeof otraCadenaTextoObjeto;

// console.log(cadenaTexto, " ", otraCadenaTextoObjeto[1]);
// // if (cadenaTexto == otraCadenaTextoObjeto) {
// //   console.log("son iguales");
// // } else {
// //   console.log("No son iguales");
// // }

// // let a = "c";
// // let b = "";

// // if (a > b) {
// //   console.log(a, " Viene antes que b");
// // } else if (b > a) {
// //   console.log(b, "viene  antes que a");
// // } else {
// //   console.log("ambas son iguales");
// // }

// function stringInsensitive(s1, s2) {
//   let flag = false;

//   if (s1.toLowerCase() == s2.toLowerCase()) {
//     flag = true;
//   }

//   return flag;
// }

// let a = "c";
// let b = "C";
// let c = "casa";

// if (stringInsensitive(a, b)) {
//   titulo3.textContent = "ambas son iguales";
// } else {
//   titulo3.textContent = "diferentes";
// }

// let miCadenaLiteral = "foo0000000000";

// let miCadenaObjeto = new String(miCadenaLiteral);

// console.log(
//   "1",
//   typeof miCadenaLiteral,
//   miCadenaLiteral.length,
//   "2",
//   typeof miCadenaObjeto,
//   miCadenaObjeto.length
// );

// // string multilinea

// let cadenaMultilinea = `Esta es la primera linea
// ###################
// Esta es la tercera linea
// ######################`;

// console.log(cadenaMultilinea);

const contadorVocales = (cancion) => {
  let contador = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let cant = 0;
  for (let i = 0; i <= cancion.length; i++) {
    switch (cancion[i]) {
      case "a":
      case "A":
        contador.a++;
        break;
      case "e":
      case "E":
        contador.e++;
        break;
      case "i":
      case "I":
        contador.i++;
        break;
      case "o":
      case "O":
        contador.o++;
        break;
      case "u":
      case "U":
        contador.u++;
        break;
    }
  }

  return contador;
};

let cancionPrueba = `AHola aeiou`;
let cancionMax = `I'm gonna marry the night
I won't give up on my life
I'm a warrior queen
Live passionately tonight u`;

let variable = contadorVocales(cancionMax);

console.log(`
a: ${variable.a}
e: ${variable.e}
i: ${variable.i}
o: ${variable.o}
u: ${variable.u}
`)
console.log("prueba ", contadorVocales(cancionPrueba));

console.log("Marry the night - vocales ", contadorVocales(cancionMax));
