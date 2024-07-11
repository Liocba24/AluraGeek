import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard (titulo, descripcion, url) {
    const producto = document.createElement("div");

    producto.className = "producto";

    producto.innerHTML = `<div class="producto__info">
                            <img class="producto__imagen" src="${url}" alt="Imagen del Producto">
                            <h4 class="producto__nombre">${titulo}</h4>
                        </div>
                        <div class="producto__accion">
                            <p class="producto__precio">${descripcion}</p>
                            <button class="producto__borrar"><i class="fa-solid fa-trash-can"></i></button>
                        </div>`;

                        
    
    return producto;


}

async function listarProductos () {
    const listAPI = await conexionAPI.listarProductos();

    listAPI.forEach(producto => lista.appendChild(crearCard(producto.titulo, producto.descripcion, producto.url)));
}

listarProductos()