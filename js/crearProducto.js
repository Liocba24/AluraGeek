import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]")

async function crearProducto (evento) {

    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;


    function formatearPrecio(precio) {
         return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(precio);
     }


    const precioFormateado = formatearPrecio(descripcion);

     await conexionAPI.enviarProducto(titulo, precioFormateado, url);

    window.location.reload();

}

formulario.addEventListener("submit", evento => crearProducto(evento));

document.querySelector('.productos__container').addEventListener('click', (event) => {
    if (event.target.closest('.producto__borrar')) {
        const productoElement = event.target.closest('.producto');
        if (productoElement) {
            productoElement.remove(); // Eliminar el elemento del DOM
            alert('¡Producto eliminado!');
        }
    }
});