// Objeto Date para trabajar con fechas(tiempo)
const ahora = new Date();
console.log(ahora);
const milisegundos = ahora.getTime();
console.log(milisegundos);

const fechaCero = new Date(0);
console.log(fechaCero);

const fechaUniversal = Date.UTC(milisegundos);
console.log(fechaUniversal);

//61*3155760000

const fechaCeroConMilisegundos = new Date(31557600000 * 51);
console.log(fechaCeroConMilisegundos);

const fechaString = new Date("July 28 1821 12:00");
console.log(fechaString);

const anho = fechaString.getFullYear();
const mes = fechaString.getMonth();
const diaMes = fechaString.getDate();
const diaSemana = fechaString.getDay();
const hora = fechaString.getHours();

console.log(`
año: ${anho}
mes: ${mes}
diaMes: ${diaMes}
diaSemana: ${diaSemana}
hora: ${hora}
`);

const calcularEdad = (fechaNacimiento) => {
  let returnObject = {
    dia: 0,
    mes: 0,
    anio: 0,
  };
  const lDate = new Date();

  let diaValueDate = lDate.getDay();
  let mesValueDate = lDate.getMonth();
  let anioValueDate = lDate.getFullYear();

  let diaValue = fechaNacimiento.getDay();
  let mesValue = fechaNacimiento.getMonth();
  let anioValue = fechaNacimiento.getFullYear();

  if (diaValueDate > diaValue) {
    returnObject.dia = diaValueDate - diaValue;
  } else {
    returnObject.dia = diaValue;
  }
  if (mesValueDate > mesValue) {
    returnObject.mes = mesValueDate - mesValue;
  } else {
    returnObject.mes = mesValueDate;
  }
  returnObject.anio = anioValueDate - anioValue;

  return returnObject;
};
const fecha = new Date("October 27 1992 03:00");
const x = calcularEdad(fecha);

console.log(`
año: ${x.anio}
mes: ${x.mes}
dia: ${x.dia}
`);
