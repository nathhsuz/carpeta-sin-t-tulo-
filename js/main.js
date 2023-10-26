const productos = [
    {
        id: "Patines-01",
        titulo: "Abrigo 01",
        imagen: "./img/pat1.webp",
        categoria: {
            nombre: "Patines",
            id: "patines",
        },
        precio: 699
    },
    {
        id: "Patines-02",
        titulo: "Patines 02",
        imagen: "./img/abrigos/02.jpg",
        categoria: {
            nombre: "Patines",
            id: "patines",
        },
        precio: 800
    },
    {
        id: "Patines-03",
        titulo: "Abrigo 03",
        imagen: "./img/patt3.png",
        categoria: {
            nombre: "Patines",
            id: "patines",
        },
        precio: 845
    },

    {
        id: "patines04",
        titulo: "Patines 04",
        imagen: "./img/patt4.png",
        categoria: {
            nombre: "Patines",
            id: "patines",
        },
        precio, 1000
     },

    {
        id: "patines05",
        titulo: "Patines 05",
        imagen: "./img/patt5.png",
        categoria: {
            nombre: "Patines",
            id: "patines",
        },
        precio: 1200
    },


    {
        id: "patines05",
        titulo: "Patines 05",
        imagen: "./img/patt5.png",
        categoria: {
            nombre: "Patines",
            id: "patines",
        },
        precio: 1200
    },

    {
        id: "Patines-06",
        titulo: "Patines 06",
        imagen: "./img/patt6.png",
        categoria: {
            nombre: "Patines",
            id: "patines",

        }   precio: 1000,

    },
    // Protect/Pads
    {
        id: "protecciones01",
        titulo: "Protecciones-01",
        imagen: "./img/proteccioness.png",
        categoria: {
            nombre: "Protecciones/pads",
            id: "protecciones/pads",
        },
        precio: 300
    },
    {
        id: "Protecciones-02",
        titulo: "Protecciones 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "Protecciones/Pads",
            id: "protecciones/Pads",
        },
        precio: 450
    },
    {
        id: "Ruedas-03",
        titulo: "Ruedas 03",
        imagen: "./img/w1.png",
        categoria: {
            nombre: "protecciones/Pads",
            id: "protecciones/Pads",
        },
        precio: 250
    },
    {
        id: "Ruedas-04",
        titulo: "Ruedas 04",
        imagen: "./img/w2.png",
        categoria: {
            nombre: "Protecciones/pads",
            id: "protecciones/pads",
        },
        precio: 280
    },
    {
        id: "Ruedas-05",
        titulo: "Ruedas 05",
        imagen: "./img/w3.png",
        categoria: {
            nombre: "Protecciones/pads",
            id: "protecciones/pads",

        }, precio: 250
    },
    {



        id: "Accesorios-01",
        titulo: "Accesorios01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 300
    },
    {
        id: "Accesorios-02",
        titulo: "Accesorios 02",
        imagen: "./img/merch1.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "Accesorios-03",
        titulo: "Accesorios 03",
        imagen: "./img/merch2.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        precio: 1000
    },
    {
        id: "Accesorios-04",
        titulo: "Accesorios 04",
        imagen: "./img/merch3.png",
        categoria: {
            nombre: "Accesorios",
            id: "Accesorios"
        },
        precio: 1000
    },
    {
        id: "Accesorios",
        titulo: "Pantalón 05",
        imagen: "./img/merch4.png",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 1000
    }
];






const contenedorProductos = document.querySelector("#contenedor-productos");
const botonCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito")

function cargarProductos() {
    productos.forEach(productos => (
        let, div = document.createElement("div")
        , div.classList.add("producto")
        , div.innerHTML = ` 
    <div class="producto-detalle">
    <img class="producto-imagen" src="${productos.imagen}" alt="">
    <div>
        <h3 class="producto-titulo">${productos.titulo}</h3>
        <p class="producto-precio">${productos.precio}</p>
        <button class="producto-agregar" id="${productos.id}"Agregar</button>

    </div>
</div> 
`
        , contenedorProductos.append(div)
    )
    )
}

cargarProductos(productos);

botonCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonCategoria.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTraget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);

        } 
   )
});

function actualizarBotonesAgregar{} { 
    botonesAgregar = document.querySelectorAll(".producto-agregar");
botonesAgregar.forEach(boton => 
{
    boton.addEventListener("Click", agregarAlCarrito);
});

}

const productosEnCarrito = [];

function agregarAlCarrito(e) {
const idBoton = e.currentTarget.id;
const productoAgregado = productos.find(producto => producto.id === idBoton);

if(productosEnCarrito.some(producto => producto.id === idBoton))
productosEnCarrito [index].cantidad++;


else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado)
}
}