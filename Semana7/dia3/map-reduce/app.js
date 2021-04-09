// let arrayNumeros = [10, 5, 20];
// console.log("array inicial ", arrayNumeros);
// let arrayNuevo = arrayNumeros.map((numero) => numero * 2);

// console.log("array final ", arrayNuevo);

let arrayDeUsuarios = [
  { nombre: "Paul", edad: 21, colorFav: "verde" },
  { nombre: "Marie", edad: 31, colorFav: "azul" },
  { nombre: "Jhon", edad: 16, colorFav: "rojo" },
  { nombre: "Carla", edad: 51, colorFav: "dorado" },
  { nombre: "Paula", edad: 11, colorFav: "verde" },
  { nombre: "Mario", edad: 41, colorFav: "azul" },
  { nombre: "Jhoana", edad: 9, colorFav: "rojo" },
  { nombre: "Carlos", edad: 41, colorFav: "dorado" },
  { nombre: "Paulina", edad: 2, colorFav: "verde" },
  { nombre: "Marcos", edad: 65, colorFav: "azul" },
  { nombre: "Jhonatan", edad: 11, colorFav: "rojo" },
  { nombre: "Jimena", edad: 71, colorFav: "dorado" },
];

arrayDeUsuarios.map((item, index) => {
  let body = document.getElementById("idBody");
  let parrafo = document.createElement("p");
  let respuesta = `hola soy ${item.nombre} , tengo ${item.edad} años y mi color favorito es ${item.colorFav}`;
  parrafo.innerHTML = respuesta;
  body.appendChild(parrafo);
  console.log(respuesta);
});

arrayDeUsuarios.forEach((item) => {
  let body = document.getElementById("idBody");
  let parrafo = document.createElement("p");
  let respuesta = `hola soy ${item.nombre} , tengo ${item.edad} años y mi color favorito es ${item.colorFav}`;
  parrafo.innerHTML = respuesta;
  body.appendChild(parrafo);
  console.log(respuesta);
});

// reduce
let sumaElementos = [10, 20, 30];

let resultado = sumaElementos.reduce((acumulador, numero) => {
  return acumulador + numero;
});

console.log(resultado);
