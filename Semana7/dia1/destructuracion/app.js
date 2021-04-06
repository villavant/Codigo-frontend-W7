let apellidos = ["ramos", "mesa", "vargas"];

let primerApellido = apellidos[0];

let [apellido1, apellido2, apellido3] = apellidos;

let peru = {
  nombreOf: "Perú",
  gentilicioP: "peruano",
  poblacion: "211 mil",
};

let { nombreOf, gentilicio,poblacion  } = peru;
console.log(`
a: ${nombreOf}
a: ${gentilicio}
a: ${poblacion}
`);
let { nombreB, gentilicioB, poblacionB } = {
  nombreOf: "Brazil",
  gentilicio: "Brasileño",
  poblacion: "211 millones",
};

// console.log(`
// nombreOf: ${nombreB}
// gentilicio: ${gentilicioB}
// poblacion: ${poblacionB}
// `)



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


  let [a,,,,,,,,,,,b] = arrayDeUsuarios;
  console.log(a);
  console.log(b);