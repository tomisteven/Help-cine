


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

const $sectionArticulos = document.getElementById("section-articulo")
export const ajax = (options) => {
  let {
    url,
    method,
    success,
    error,
    data
  } = options;

  //creamos nueva peticion
  const xhr = new XMLHttpRequest();

  //verificamos si el status es correcto
  xhr.addEventListener("readystatechange", e => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      //mensaje de error si encuentra uno
      let message = xhr.statusText || "Ocurrió un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8"); //cabecera 
  xhr.send(JSON.stringify(data));

}
ajax({
  url: "./JSON/Peliculas.json",
  success: (res) => {
    //console.log(res);
    //console.log(res.Peliculas);

    const $selector = document.querySelectorAll(".selectores")
    //const genero_Arr = []
    //guardamos el genero de los selectores
    //console.log(genero_Arr)
    $selector.forEach(el => {
      //al arreglo le introducimos los selectores
      //genero_Arr.push(el.textContent)
      //por cada selector creamos un boton click
      el.addEventListener("click", e => {
        e.preventDefault()
        //limpia el array que contiene las categorias elegidas en los selectores
        $postElegidos.innerHTML = ""
        //console.log(res)
        //funcion que depende el selector que clickeamos busca su pareja en las categorias
        function findCategorias(cat) {
          return cat.categoria == e.target.textContent
        }
        //guarda las coincidencias de los selectores y categorias
        let Catseleccionada = res.Peliculas.filter(findCategorias)
        console.log(Catseleccionada)
        //sino manda una alerta que no encontro la pelicula
        if (Catseleccionada.length == 0) {
          $postElegidos.innerHTML = ""
          $posts.style.display = "flex"
          const noHayPelicula = document.createElement("div")
          noHayPelicula.className = "Nohay"
          noHayPelicula.textContent = "No hay peliculas para esta categoria !!"
          $postElegidos.appendChild(noHayPelicula)
          noHayPelicula.insertAdjacentElement("beforeend", $posts)
          //si hay pelicula que coincida con el selector la imprime en pantalla
        } else {
          
          Catseleccionada.forEach((el) => {
            $$template.querySelector(".titulo").textContent = el.Nombre
            $$template.querySelector(".imagen").src = el.img
            $$template.querySelector(".categoria").innerHTML = `<i class="fas fa-hand-point-right"></i> &nbsp; Categoria: &nbsp;${el.categoria}`
            $$template.querySelector("time").textContent = el.Estreno
            
            //clonamos todos los posts
            let $clone = document.importNode($$template, true);
            //los agregamos al fragmento
            $fragment.appendChild($clone);
          })
          //imprimimos el fragmento
          $postElegidos.style.display = "flex"
          $postElegidos.appendChild($fragment)
          //ocultamos todos los posts
          $posts.style.display = "none"
          $postElegidos.classList.add("select")
        }
        
        //siguiente paso: IMPRIMIR LOS POST : HECHO -CORREGIR BUG DE IMPRESION DE POSTS --HECHO
        //FUNCION DE CARGAR MAS PELICULAS
      })
    })
  }
})
ajax({
  url: "./JSON/Series.json",
  success: (res) => {
    //console.log(res);
    //console.log(res.Peliculas);

    const $selector = document.querySelectorAll(".selectores")
    const genero_Arr = []
    //guardamos el genero de los selectores
    //console.log(genero_Arr)
    $selector.forEach(el => {
      //al arreglo le introducimos los selectores
      genero_Arr.push(el.textContent)
      //por cada selector creamos un boton click
      el.addEventListener("click", e => {
        e.preventDefault()
        //limpia el array que contiene las categorias elegidas en los selectores
        $postElegidoSeries.innerHTML = ""
        //console.log(res)
        //funcion que depende el selector que clickeamos busca su pareja en las categorias
        function findCategorias(cat) {
          return cat.categoria == e.target.textContent
        }
        //guarda las coincidencias de los selectores y categorias
        let Catseleccionada = res.Series.filter(findCategorias)
        console.log(Catseleccionada)
        //sino manda una alerta que no encontro la pelicula
        if (Catseleccionada.length == 0) {
          $postSeries.style.display = "flex"
          $postElegidoSeries.innerHTML = ""
          
          
        } else {
          Catseleccionada.forEach((el) => {
            $$templateSeries.querySelector(".titulo").textContent = el.Nombre
            $$templateSeries.querySelector(".imagen").src = el.img
            $$templateSeries.querySelector(".categoria").innerHTML = `<i class="fas fa-hand-point-right"></i> &nbsp; Categoria: &nbsp;${el.categoria}`
            $$templateSeries.querySelector("time").textContent = el.Estreno
            //clonamos todos los posts
            let $clone = document.importNode($$templateSeries, true);
            //los agregamos al fragmento
            $fragment.appendChild($clone);
          })
          //imprimimos el fragmento
          $postElegidoSeries.style.display = "flex"
          $postElegidoSeries.appendChild($fragment)
          //ocultamos todos los posts
          $postSeries.style.display = "none"
          $postElegidoSeries.classList.add("select")
          //articulo
          $sectionArticulos.style.visibility = "hidden"
        }
        //voton de volver
        $btnVolver.addEventListener("click", () => {
          $sectionArticulos.style.visibility = "hidden"
          $sectionArticulos.style.display = "none"
          //peliculas
          $postElegidos.innerHTML = ""
          $postElegidos.style.display = "none"
          $posts.style.display = "flex"
          //series
          $postElegidoSeries.innerHTML = ""
          $postElegidoSeries.style.display = "none"
          $postSeries.style.display = "flex"
          /* //titulo
          const $titulo_serie = document.querySelector(".titulo-series-h3")
          const $titulo_serie2 = document.querySelector(".titulo-series")
          $titulo_serie2.textContent= "Series"
          $titulo_serie.textContent="Series"
          $titulo_serie.style.marginLeft= "400px"
          $titulo_serie.style.color = "red"
          $titulo_serie.style.fontSize = "30px"
          $titulo_serie.style.display = "flex"
          $titulo_serie.style.align = "center"
          
          $titulo_serie.style.fontFamily = "gagalin" */ 
        })
        //siguiente paso: IMPRIMIR LOS POST : HECHO -CORREGIR BUG DE IMPRESION DE POSTS --HECHO
        //FUNCION DE CARGAR MAS PELICULAS
      })
    })
  }
})