// Litsa de que haceres

// 1.Lavar la ropa
// 2.pasear al perro
// 3.sacar la basura
// 4.cocinar

const lavarRopa = () => {
  console.log("1.Lavar la ropa");
};

const pasearPerro = () => {
  console.log("2.pasear al perro");
};

const sacarBasura = () => {
  console.log("3.sacar la basura");
};

const cocinar = () => {
  console.log("4.cocinar");
};

function queHAceres() {
  lavarRopa();
  pasearPerro();
  sacarBasura();
  cocinar();
}

function queHaceres(callback) {
  callback(err, lavarRopa);
}
