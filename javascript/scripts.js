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