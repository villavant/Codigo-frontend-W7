async function fun_asincrona() {
  return 23;
}

// funcion arrow asincrona
const otrafuncion = async () => 42;

console.log(fun_asincrona());


fun_asincrona().then((valor => {
    console.log("Este es el valor de la promesa " ,valor)
}))
