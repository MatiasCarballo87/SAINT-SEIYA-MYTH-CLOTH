
/* 1- desafio complementario: crear un algoritmo utilizando un ciclo */

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

/* 2- desafio entregable: simulador interactivo */


const elegirProducto = () => {
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

alert ("Continuar con el pago");

