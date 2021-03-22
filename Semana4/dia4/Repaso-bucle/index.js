console.log("hola mundo");
console.log(1 * 2);
let condicion = true;
if (condicion === true) {
  console.log("Eso se ejecuta si mi condición es verdadera");
} else {
  console.log("Eso se ejecuta si mi condición es falso");
}

let palabra = "";
if (palabra === "palabra1") {
  console.log("imprime la palabra1 si la comparación es verdadera");
} else if (palabra === "palabra2") {
  console.log("imprime la palabra2 si la comparación es verdadera");
} else if (palabra === "palabra2") {
  console.log("imprime la palabra2 si la comparación es verdadera");
} else if (palabra === "palabra2") {
  console.log("imprime la palabra2 si la comparación es verdadera");
} else if (palabra === "palabra2") {
  console.log("imprime la palabra2 si la comparación es verdadera");
}
let cancion = "la la la";

switch (cancion) {
  case "cancion1":
    console.log("Esta es la canción 1");
    break;
  case "cancion2":
    console.log("Esta es la canción 2");
    break;
  case "cancion3":
    console.log("Esta es la canción 3");
    break;
  case "cancion4":
    console.log("Esta es la canción 4");
    break;
  case "cancion5":
    console.log("Esta es la canción 5");
    break;
  default:
    console.log("default");
    break;
}

// Bucles
// FOR

// for (let i = 0; i < 300; i++) {
//   let resultado = isParInpar(i);
//   if(resultado == true)
//     console.log(`${i} es par`);

// }

// function isParInpar(numero) {
//   let x = numero % 2;
//   if (x == 0) return true;
//   // else return `${numero} es inpar`;
// }

for (let i = 1; i < 1000; i++) {

  if (isDivisible3(i)) console.log(`${i} es divisible a 3`);
  else if (isDivisible5(i)) console.log(`${i} es divisible a 5`);
  else if (isDivisible7(i)) console.log(`${i} es divisible a 7`);
}
function isDivisible3(numero) {
  let x = numero % 3;
  if (x == 0) return true;
}
function isDivisible5(numero) {
  let x = numero % 5;
  if (x == 0) return true;
}
function isDivisible7(numero) {
  let x = numero % 7;
  if (x == 0) return true;
}

let array_vocales =["a","e","i","o","u"];
let frase_vocales = "Mis vocales son ";

const mi_titulo = document.querySelector("h1");



for(let i=0; i<array_vocales.length;i++){
  frase_vocales =frase_vocales + array_vocales[i] + " , ";
  const btn = document.createElement('h1')

  setTimeout(()=>{
    btn.textContent=array_vocales[i] ;
    document.body.appendChild(btn);  
    mi_titulo.textContent =frase_vocales;
  },(1000*(i+2)))
}
