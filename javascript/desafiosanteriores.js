
/* 1- DESAFIO COMPLEMENTARIO: CREAR UN ALGORITMO UTILIZANDO UN CICLO */

/* 
let coleccion = prompt("ya tienes una figura?")

switch(coleccion) {
    case "si":
        alert("Bienvenido hermano ateniense")
    break;
    case "no": 
        alert("Únete este camino sin retorno")
    break;
} */

/* 2- DESAFIO ENTREGABLE: SIMULADOR INTERACTIVO */


/* const elegirProducto = () => {
    producto = prompt ("Elige tu Myth: seiya, shiryu, shun, kanon, camus, aiolos, bud, poseidon, hades");

    let precio
    switch (producto) {
        case "seiya":
            precio = 150;
        break;
        case "shiryu":
            precio = 150;
            break;
        case "shun":
            precio = 150;
            break;
        case "kanon":
            precio = 180;
            break;
        case "camus":
            precio = 180;
            break;
        case "aiolos":
            precio = 180;
            break;
        case "bud":
            precio = 190;
            break;
        case "poseidon":
            precio = 200;
            break;
        case "hades":
            precio = 250;
            break;
    }    
    return precio;
}

const elegirCantidad = () => {
    let cantidad = parseInt (prompt ("Elija la cantidad deseada: 1, 2, etc..."));

    return cantidad;
}

const calcularTotal = (precioProducto, cantidadProducto) => {
    total = precioProducto * cantidadProducto;
}

calcularTotal(elegirProducto(), elegirCantidad());

alert ("total: " + total);

alert ("Continuar con el pago"); */




/* DESAFIO COMPLEMENTARIO 3 */


/* const nombres = ["seiya", "shiryu", "kanon", "camus","shun"];

console.log (nombres.indexOf("kanon"))
console.log (nombres.indexOf("camus"))

const dorados = nombres.slice(2,4)

console.log(dorados) */




const elijeTuPersonaje = () => {
   caballero = prompt ("Elige entre los siguientes personajes: Seiya, Shiryu, Shun, Kanon, Camus, Aiolos, Bud, Poseidon, Hades");

   let de 
   switch (caballero) {
       case "seiya":
           de = "Bronce";
            break;
       case "shiryu":
           de = "Bronce";
            break;
       case "shun":
           de = "Bronce";
            break;
        case "kanon":
            de = "Oro";
            break;
        case "camus":
            de = "Oro";
            break;
        case "aiolos":
            de = "Oro";
            break;
        default:
            de = "Dios Guerrero";
            break;
   }

   return de;
}

alert("Elegiste un Caballero de " + elijeTuPersonaje());

const nombres = [{range: "bronce", name: "seiya"},{range: "bronce", name:"shiryu"},{range: "oro", name: "kanon"},{range: "oro", name: "camus"}, {range: "dios", name: "poseidon"}, {range: "dios", name: "hades"}];

const filterA = nombres.filter((rango) => {
    return rango.range === "oro"
})

console.log(filterA)


