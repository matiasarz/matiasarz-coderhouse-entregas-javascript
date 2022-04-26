const contenedor = document.querySelector(".container");


contenedor.addEventListener("click",(e)=> {
  e.target.matches(".hola") ? console.log("es el div hola") : console.log("ahora no estas en hola");
})