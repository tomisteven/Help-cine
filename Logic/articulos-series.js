import {
    ajax
} from "./SelectoresGenero.js"

let $pelicula = document.querySelector(".pelicula")
const $imagen = document.querySelector(".imagen")
const $titulo = document.querySelector(".titulo")
const $descripcion = document.querySelector(".descripcion")
const $categoria = document.querySelector(".categoria")

const $$template = document.getElementById("Cartelera-pelicula").content
const $$templateSeries = document.getElementById("Cartelera-series").content
const $fragment = document.createDocumentFragment();
const $posts = document.getElementById("posts")
const $postSeries = document.getElementById("posts-series")

const $postElegidos = document.getElementById("posts-elegido")
const $postElegidoSeries = document.getElementById("posts-elegido-series")

const $btnVolver = document.getElementById("btnVolver")
const $titulopelicula = document.querySelector(".titulo-peliculas")
const $tituloseries = document.querySelector(".titulo-series")
const $templateArticulos = document.getElementById("template-articulo-peliculas").content
const $sectionArticulos = document.getElementById("section-articulo")

ajax({
    url: "./JSON/Series.json",
    success: (datos) => {
        document.addEventListener("click", (e) => {
            if (e.target.matches(".showArticle")) {
                //console.log(e.target)
                let articulo = e.target.getAttribute("data-articulo")
                
                //console.log(e.target.getAttribute("data-articulo"))
                //console.log(datos.Peliculas[articulo])
                function findCategorias(art) {
                    return art.Nombre == articulo
                }
                let artSeleccionada = datos.Series.filter(findCategorias)
                
                artSeleccionada.forEach(el => {
                    console.log(el)
                    $templateArticulos.querySelector(".img-articulo").src = el.img
                    $templateArticulos.querySelector(".titulo-articulo").textContent = el.Nombre
                    $templateArticulos.querySelector(".categoria-articulo").textContent = `Categoria: ${el.categoria}`
                    $templateArticulos.querySelector(".director-articulo").textContent = `Director: ${el.director}` 
                    $templateArticulos.querySelector(".reseña-articulo").textContent = `Descripcion: ${el.reseña}`
                    $templateArticulos.querySelector(".actores-articulo").textContent = `Actores: ${el.actores}`
                    $templateArticulos.querySelector(".puntos").textContent = el.puntos
                    //clonamos todos los posts
                    let $clone = document.importNode($templateArticulos, true);
                    //los agregamos al fragmento
                    $fragment.appendChild($clone);
                });
                $sectionArticulos.style.display = "flex";
                $titulopelicula.style.display = "none"
                $tituloseries.style.display = "none"
                $posts.style.display = "none"
                $postSeries.style.display = "none"
                
                $sectionArticulos.appendChild($fragment)
            }
            const $btnVolver = document.getElementById("btnVolver")
            $btnVolver.addEventListener("click", () => {
                $titulopelicula.style.display = "flex"
                $tituloseries.style.display = "flex"
                
                $postElegidos.innerHTML = ""
                $postElegidos.style.display = "none"
                $posts.style.display = "flex"
                //series
                $postElegidoSeries.innerHTML = ""
                $postElegidoSeries.style.display = "none"
                $postSeries.style.display = "flex"
                $sectionArticulos.innerHTML = ""
                $sectionArticulos.style.display = "none"
            })
        })





    }
})