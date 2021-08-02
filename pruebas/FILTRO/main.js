const d = document

const $btndogo = d.getElementById("btnDogo")
const btnMastin = document.getElementById("btnMastin")
const $btnPitbull = document.getElementById("btnPitbull")
const $btnChihuahua = document.getElementById("btnChihuahua")
const $btnGrandanes = document.getElementById("btnGrandanes")
const $btnBulldog = document.getElementById("btnBulldog")




function filtro(selector){
    
        $btndogo.addEventListener("click", ()=>{
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes("dogo")
                ? el.classList.remove("filter")
                : el.classList.add("filter")
                )
        })
        btnMastin.addEventListener("click", ()=>{
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes("mastin")
                ? el.classList.remove("filter")
                : el.classList.add("filter")
                )
        })
        $btnPitbull.addEventListener("click", ()=>{
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes("pitbull")
                ? el.classList.remove("filter")
                : el.classList.add("filter")
                )
        })
        $btnChihuahua.addEventListener("click", ()=>{
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes("chihuahua")
                ? el.classList.remove("filter")
                : el.classList.add("filter")
                )
        })
        $btnBulldog.addEventListener("click", ()=>{
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes("bulldog")
                ? el.classList.remove("filter")
                : el.classList.add("filter")
                )
        })
        $btnGrandanes.addEventListener("click", ()=>{
            d.querySelectorAll(selector).forEach((el) => 
                el.textContent.toLowerCase().includes("gran danes")
                ? el.classList.remove("filter")
                : el.classList.add("filter")
                )
        })
}

filtro(".cont-work")


