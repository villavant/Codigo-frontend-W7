// Condiciones

// const lcancion = "maniac"
// if (lcancion == 'maniac') {
//     console.log(`You were with your friends partying
//         When the alcohol kicked in
//         Said you wanted me dead So, you show up at my home, all alone With a shovel and a rose Do you think I 'm a joke?`)
// } else if (
//     lcancion == 'marry the night') {
//     console.log('none')
// } else if (lcancion == 'dope') {
//     console.log('none')
// } else if (lcancion == 'adore you')

// {
//     console.log('none')
// }


var seleccionar = document.getElementById("idSelect");
console.log(seleccionar);
var  parrafo = document.getElementById('parr');
console.log(parrafo);


seleccionar.addEventListener("change", setClima);

function setClima() {
    let item = seleccionar.value;
    console.log(item)
    if (item === "soleado") {
        parrafo.textContent = "El día está agradable y muy bonito";
    } else if (item === "lluvioso") {
        parrafo.textContent = "Está lloviendo, mejor quedate en casa";
    } else if (item === "nevado") {
        parrafo.textContent = "Si sales, trata de salir con algo ";
    } else if (item === "nublado") {
        parrafo.textContent = "No hace falts que salgas con lentes de sol"
    } else {
        parrafo.textContent = ""
    }
}