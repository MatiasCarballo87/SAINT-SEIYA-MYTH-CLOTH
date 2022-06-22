// Desafio Incorporar Eventos

 let cart = []


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

        addButton.addEventListener("click", function () {
            cart.push(figuras)
            alert("Añadiste "+ figuras.name + " al carrito")
            contenedorCart.innerHTML = ` `
            mostrarCarrito()
        })
    })
}

mostrarMythCloths()

let contenedorCart = document.getElementById('contenedorCart')

function mostrarCarrito() {
    cart.map((figuras) => {
        const infoCart = document.createElement("li")
        infoCart.setAttribute("id","lista")
        infoCart.innerHTML +=`
        <img src="${figuras.img}">
        <h3>${figuras.name}</h3>
        <h3>$${figuras.price}</h3>
        `
        contenedorCart.append(infoCart)

    })
        
}
