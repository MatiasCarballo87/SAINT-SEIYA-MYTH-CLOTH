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
        element.addEventListener('click', anadirAlCarrito)
    }
    viewCart()
} 


//AÑADIR AL CARRITO

function anadirAlCarrito(e) {
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
    showCart.innerHTML = ``
    viewCart()
}


//TOTAL CARRITO

const totalCart = () => {
    return cart.reduce((acc, figu) => acc + figu.price * figu.cantidad, 0)
}

//MOSTRAR CARRITO

const showCart = document.getElementById('contenedorCart')


function viewCart() {
    const tableContent = `
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th>PRODUCTO</th>
                    <th>NOMBRE DEL PRODUCTO</th>
                    <th>PRECIO</th>
                    <th>CANTIDAD</th>
                    <th>SUBTOTAL</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>TOTAL:</th>
                    <th>u$d ${totalCart()}</th>
                    <th><button class="buyCart">COMPRAR</button></th>
                </tr>
            </tfoot>
        </table>
    </div>   
    `
    showCart.innerHTML += tableContent;

    const tbody = document.getElementById('tbody')

    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        const { id, img, name, price, cantidad} = element
        const selectFig = `
            <tr>
                <td><img src="${img}"></td>
                <td>${name}</td>
                <td>u$d ${price}</td>
                <td>${cantidad}</td>
                <td>u$d${(cantidad * price)}</td>
                <td><button id=${id} class="deleteButton">ELIMINAR</button></td>
            </tr>
        `
        
        tbody.innerHTML += selectFig;
        
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
    Swal.fire({
        title: 'Eliminaste a: ' + id + ' del carrito',
        confirmButtonColor: 'green',
    })
    const cartFiltered = cart.filter(figure => figure.id !=id)
    localStorage.setItem('cart', JSON.stringify(cartFiltered))
    delbtn.parentNode.parentNode.remove()
    console.log(cart)
    cart = JSON.parse(localStorage.getItem('cart'))
}


//COMPRAR CARRITO

document.addEventListener("click", (e) => {
    if(e.target && e.target.matches("button.buyCart")){
        buyTotal(e);
        Swal.fire({
            title: 'Ingrese sus datos',
            confirmButtonColor: 'green',
        })
    }
})


function buyTotal() {
    const total = `
    <form id="form">
        <div class="nombre">
            <label for="nombre">Nombre y Apellido:</label>
            <input type="text" id="nombre" placeholder="ingrese nombre y apellido">
        </div>  
        <div class="direccion">
            <label for="direccion">Direccion:</label>
            <input type="text" id="direccion" placeholder="ingrese direccion">
        </div> 
        <div class="numero">
            <label for="numero">Numero de Celular:</label>
            <input type="number" id="numero" placeholder="ingrese numero">
        </div> 
        <div class="email">
            <label for="email">E-mail:</label>
            <input type="mail" id="email" placeholder="ingrese e-mail">
        </div>  
        <button class="boton-enviar" type="submit">Enviar</button>
    </form>
    ` 
    showCart.innerHTML += total;
    
}


//CAPTURAR DATOS DEL USUARIO 

document.addEventListener("click", (e) => {
    if(e.target && e.target.matches("button.boton-enviar")){
        e.preventDefault();
        const nombre = document.getElementById('nombre')
        const input1 = nombre.value;
        const direccion = document.getElementById('direccion')
        const input2 = direccion.value;
        Swal.fire({
            title: 'Muchas gracias por tu compra '  +  input1 + ' enviaremos tu pedido a ' + input2 + ' por correo.',
            confirmButtonColor: 'green',
            
        })
        form.reset()
        tbody.innerHTML = ` `
      
    }
        
})






