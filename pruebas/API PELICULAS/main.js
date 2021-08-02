
function Getdata(busqueda){

    fetch(`https://api.themoviedb.org/3/search/multi?api_key=13debc87b2848f3b3723075011b31c7e&language=en-US&query=${busqueda}&page=1&include_adult=false`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json)
    })
}

Getdata()