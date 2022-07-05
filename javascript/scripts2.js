let cart;

if(JSON.parse(localStorage.getItem('cart'))) {
    cart = JSON.parse(localStorage.getItem('cart'))
}else { 
    localStorage.setItem('cart', JSON.stringify([]))
    cart = JSON.parse(localStorage.getItem('cart'))
}

function mostrarMythCloths() {

    for (let i = 0; i < figures.length; i++) {
        const element = figures[i];
        const { id, img, name, price } = element
        const box = `
        <div class="myths">
            <img src="${img}" alt="">
            <div class="description">
                <h3>${name}</h3>
                <p>$${price}</p>
                <button id=${id} class="addButton">Añadir al Carrito</button>
            </div>
        </div>
        `
        const container = document.getElementById('contenedorItems')
        container.innerHTML += box
    }
    
}

mostrarMythCloths()

const addButton = document.getElementsByClassName('addButton')

for (let i = 0; i < addButton.length; i++) {
    const element = addButton[i];
    element.addEventListener('click', añadirAlCarrito)
}


function añadirAlCarrito(e) {
    const btn = e.target;
    const id = btn.getAttribute('id')
    const figuFinded = figures.find(figu => figu.id == id)
    const inCart = cart.find(figu => figu.id == figuFinded.id)
    console.log(inCart)
    if(!inCart) {
        cart.push({...figuFinded, cantidad: 1})
    }else {
        let cartFilted = cart.filter(figu => figu.id != inCart.id)
        cart = [...cartFilted, {...inCart, cantidad: inCart.cantidad + 1}]
    }

    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))   
    
}


const totalCart = () => {
    return cart.reduce((acc, figu) => acc + figu.price * figu.cantidad, 0)
}


const showCart = document.getElementById('contenedorCart')

for (let i = 0; i < cart.length; i++) {
const element = cart[i];
const { id, img, name, price, cantidad} = element
const selectFig = `
<div class="contFiguras">
    <div class="miniFigura">
        <img src="${img}">
    </div>
    <div class="miniName">    
        <h3>${name}</h3>
    </div>
    <div class="miniPrice">    
        <h3>u$d ${price}</h3>
    </div>
    <div class="cant">
        <p>${cantidad}</p>
    </div>
    <div class="subtotal">
        <p>$${(cantidad * price)}</p>
    </div>
        <div class="delete">
        <button id=${id} class="deleteButton">Eliminar del carrito</button>
    </div>  
</div>        
`
showCart.innerHTML += selectFig;

}

const deleteButton = document.getElementsByClassName('deleteButton')

for (let i = 0; i < deleteButton.length; i++) {
    const element = deleteButton[i];
    element.addEventListener('click', eliminarDelCarrito)
}

function eliminarDelCarrito (e) {
    const delbtn = e.target;
    const id = delbtn.getAttribute('id')
    const figuFinded = figures.find(figu => figu.id == id)
    const inCart = cart.find(figu => figu.id == figuFinded.id)
    console.log(inCart)
    if(!inCart) {
        let cartFilted = cart.filter(figu => figu.id != inCart.id)
        cart = [...cartFilted] && console.log(cart)
    }

    showCart.innerHTML = ``
}