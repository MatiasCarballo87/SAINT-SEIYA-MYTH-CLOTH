// SWEET ALERT

(async () => {
    const {value: pais} = await Swal.fire({
        title: 'Bienvenido!',
        text: 'Selecciona tu pais',
        confirmButtonText: 'Seleccionar',
        confirmButtonColor: 'green',
        allowOutsideClick: false,
        input: 'select',
        inputPlaceholder: 'Pais',
        inputOptions: {
            Argentina: 'Argentina',
            Brasil: 'Brasil',
            Chile: 'Chile',
            Uruguay: 'Uruguay',
            Paraguay: 'Paraguay',
            Peru: 'Peru',
            Mexico: 'Mexico'
        },
        imageUrl: 'images/fondoseiya.webp',
        imageWidth: '300px',
        imageAlt: 'fondo caballeros de bronce',
    });

    if (pais){
        Swal.fire({
            title: `Seleccionaste ${pais}`,
            confirmButtonColor: 'green'
        });
    }
})()

//FETCH

fetch('./figures.json')
    .then(response => response.json())
        .then(data => {
            console.log(data);
            figures = data;
            mostrarMythCloths();
    })
.catch(error => console.error(error))


//MOSTRAR PRODUCTOS

let cart = JSON.parse(localStorage.getItem('cart')) || []

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

    const addButton = document.getElementsByClassName('addButton')

    for (let i = 0; i < addButton.length; i++) {
        const element = addButton[i];
        element.addEventListener('click', añadirAlCarrito)
    }
    
}

//AÑADIR AL CARRITO

function añadirAlCarrito(e) {
    const btn = e.target;
    const id = btn.getAttribute('id')
    Swal.fire({
        title: 'Añadiste a: ' + id + ' al carrito',
        confirmButtonColor: 'green',
    })
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


//TOTAL CARRITO

const totalCart = () => {
    return cart.reduce((acc, figu) => acc + figu.price * figu.cantidad, 0)
}


//MOSTRAR CARRITO

const showCart = document.getElementById('contenedorCart')


function viewCart() {
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
}
    
    
//BOTON ELIMINAR DEL CARRITO 
    
document.addEventListener("click", (e) => {
    if(e.target && e.target.matches("button.deleteButton")){
        eliminarDelCarrito(e);
    }
})


// FUNCION ELIMINAR DEL CARRITO

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
    localStorage.setItem('cart', JSON.stringify(cart))
}