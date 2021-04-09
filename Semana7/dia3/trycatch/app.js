// // let variable_objeto = 45;

// const errorExample = () => {
//   try {
//     console.log(variable_objeto * 1000);
//   } catch (error) {
//     console.log(error);
//   }
// };

// errorExample();

// let edad = prompt("iIngresar tu edad");

// try {
//   if (isNaN(+edad)) {
//     throw new Error("No es un número");
//   } else {
//     console.log("Hey felicidades tienes: ", edad);
//   }
// } catch (error) {
//   console.log(error);
// }

// let anio_nacimiento = prompt("Ingresar año de nacimiento");
// try {
//   if (isNaN(+anio_nacimiento)) {
//     throw new Error("No es un número");
//   } else if (anio_nacimiento < 0) {
//     throw new Error("Es negativo");
//   } else if (anio_nacimiento < 1960) {
//     throw new Error("hHey, el año de nacimiento es menor a 1960");
//   } else {
//     console.log(
//       "Hey, felicidades tu año de nacimiento es correcto: ",
//       anio_nacimiento
//     );
//   }
// } catch (ex) {
//   console.log(ex);
// }

// let miVariable = prompt("Dame un numero")

// try{
//   if (isNaN(+miVariable)) {
//     throw new Error("No es un número");
//   }
// }catch(error)
// {
//     if(error.name==="TypeError"){
//         console.log (error)
//     }
//     throw error;
// }

// const binomio = async (a, b) => {

//   async function parte1(){
//     let primerFactor = a ** 2;
//     primerFactor ? primerFactor : Error("No es una operación potencia");
//   }

//   async function parte2(){
//     let segundoFactor = 2 * a * b;
//     segundoFactor ? segundoFactor : Error("No es una operación potencia");
//   }
//   async function parte3(){
//     let tercerFactor = b ** 2;
//     tercerFactor ? tercerFactor : Error("No es una operación potencia");
//   }

//   const aparte1 = await parte1();
//   const aparte2 = await parte2();
//   const aparte3 = await parte3();
// };

const binomio = async (a, b) => {
  try {
    if (isNaN(+a) || isNaN(+b)) {
      throw new Error("No son datos numéricos");
    } else {
      async function parte1() {
        return (primerFactor = a ** 2);
      }

      async function parte2() {
        return (segundoFactor = 2 * a * b);

      }
      async function parte3() {
        return (tercerFactor = b ** 2);
      }

      let aparte1 = await parte1();
      let aparte2 = await parte2();
      let aparte3 = await parte3();
      return aparte1 + aparte2 + aparte3;
    }
  } catch (error) {
    if (error.name === "TypeError") {
      console.log(error);
    }
    throw error;
  }
};

// const x = binomio(1,2);
// console.log(x);

binomio(1, 2).then((valor) => {
  console.log(valor);
});
