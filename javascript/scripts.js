// Primera entrega del Proyecto Final

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



 
let contenedorItems = document.getElementById('contenedorItems')

function mostrarMythCloths() {
    figures.forEach((figuras) => {
        let box = document.createElement("div")
        box.setAttribute("class","myths")
        contenedorItems.append(box)
        let img = document.createElement("img")
        img.setAttribute("src", figuras.img)
        let cont = document.createElement("div")
        cont.setAttribute("class","description")
        let name = document.createElement("h3")
        name.innerText = (figuras.name)
        let price = document.createElement("p")
        price.innerText = (figuras.price)
        let addButton = document.createElement("button")
        addButton.innerText = ("Añadir al carrito")
        cont.append(name, price, addButton)
        box.append(img, cont)
    })
}

mostrarMythCloths()