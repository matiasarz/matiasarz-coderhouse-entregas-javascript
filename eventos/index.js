const start = document.querySelector(".play");
const contenedor1 = document.querySelector(".start-container");
const contenedor2 = document.querySelector(".game-container");
const contenedorPadre = document.querySelector(".contenedor");

const templateGame = document.getElementById("game-template");
const templateVs = document.getElementById("game-vs");
const templateGameOver = document.getElementById("game-over-template");

class Persona {
    constructor(nombre,patrimonio,img) {
      this.nombre = nombre;
      this.patrimonio = patrimonio;
      this.imagen = img;
    }
}

const personas = [];

personas.push(new Persona("Francesco Totti",89,"imagenes/totti.webp"));
personas.push(new Persona("Mathieu Flamini",97,"imagenes/flamini.jpg"));
personas.push(new Persona("Andrés Iniesta",106,"imagenes/iniesta.jpg"));
personas.push(new Persona("Gareth Bale",124,"imagenes/bale.jpg"));
personas.push(new Persona("Neymar",164,"imagenes/neymar.jpg"));
personas.push(new Persona("Zlatan Ibrahimovic",168,"imagenes/zatlan.jpg"));
personas.push(new Persona("Lionel Messi",355,"imagenes/messi.jpg"));
personas.push(new Persona("David Beckham",400,"imagenes/beckham.jpg"));
personas.push(new Persona("Cristiano Ronaldo",1000,"imagenes/cristiano.jpg"));
personas.push(new Persona("Faiq Bolkiah",1800,"imagenes/bolkhia.webp"));
personas.push(new Persona("Roger Federer",106.3,"imagenes/federer.jpg"));
personas.push(new Persona("Lebron James",88.2,"imagenes/lebron.jpg"));
personas.push(new Persona("Dwayne Johnson 'The Rock'",87.5,"imagenes/rock.jpg"));
personas.push(new Persona("James Patterson",80,"imagenes/patterson.webp"));
personas.push(new Persona("Stephen Curry",74.4,"imagenes/curry.jpg"));
personas.push(new Persona("Ariana Grande",72,"imagenes/grande.webp"));
personas.push(new Persona("Ryan Reynolds",71.5,"imagenes/ryan.jpg"));
personas.push(new Persona("Gordon Ramsay",70,"imagenes/gordon.jpg"));
personas.push(new Persona("Jonas Brothers",68.5,"imagenes/jonas.jpg"));
personas.push(new Persona("The Chainsmokers",68,"imagenes/smokers.jpg"));
personas.push(new Persona("Ed Sheeran",64,"imagenes/edsheeran.jpg"));
personas.push(new Persona("Kevin Durant",63.9,"imagenes/durant.jpg"));
personas.push(new Persona("Taylor Swift",63.5,"imagenes/taylor.jpg"));
personas.push(new Persona("J.K. Rowlilng",60,"imagenes/jk.jpg"));
personas.push(new Persona("Ben Affleck",55,"imagenes/ben.jpg"));
personas.push(new Persona("Shawn Mendes",54.5,"imagenes/mendez.jpg"));
personas.push(new Persona("Vin Diesel",54,"imagenes/diesel.jpg"));
personas.push(new Persona("Bilie Elish",53,"imagenes/billie.jpg"));
personas.push(new Persona("Drake",49,"imagenes/drake.jpg"));
personas.push(new Persona("Conor Mcgregor",48,"imagenes/conor.jpg"));

let id1;
let id2;
let contadorPuntos = 0;
let patrimonios = [];

start.addEventListener("click",()=> {      
  const cloneVs = templateVs.content.cloneNode(true); 
  contenedor1.replaceChild(cloneVs,start)
  
  const cloneGame = templateGame.content.cloneNode(true);
  const afterPlay = (id1,id2)=> {
    if (cloneGame.hasChildNodes()) {
      cloneGame.children[0].children[0].src = `${personas[id1].imagen}`;
      cloneGame.children[1].children[0].src = `${personas[id2].imagen}`;
      
      cloneGame.children[2].children[0].textContent = `"${personas[id1].nombre}"`;
      cloneGame.children[3].children[0].textContent = `"${personas[id2].nombre}"`;
      
      // Eventos con funciones
      cloneGame.querySelector(".options .richer").addEventListener("click",richer);
      cloneGame.querySelector(".options .less-money").addEventListener("click",lessMoney);
      
      contenedor2.appendChild(cloneGame);
      contenedorPadre.appendChild(contenedor2);
    } 
  }
  
  id1 = Math.floor(Math.random()*personas.length);
  id2 = Math.floor(Math.random()*personas.length);
  
  if (id1 === id2) {
    id2 = Math.floor(Math.random()*personas.length);
    afterPlay(id1,id2);
    patrimonios = [personas[id2].patrimonio,personas[id1].patrimonio];
  } 
  else {
    afterPlay(id1,id2);
    patrimonios = [personas[id2].patrimonio,personas[id1].patrimonio];
  }
})

const showOptions = (id1,id2)=> {
  contenedor2.children[0].children[0].src = `${personas[id1].imagen}`;
  contenedor2.children[1].children[0].src = `${personas[id2].imagen}`;
      
  contenedor2.children[2].children[0].textContent = `"${personas[id1].nombre}"`;
  contenedor2.children[3].children[0].textContent = `"${personas[id2].nombre}"`;
  patrimonios = [personas[id2].patrimonio,personas[id1].patrimonio];

  return patrimonios[id2,id1];
} 

const richer = ()=> {
  id1 = Math.floor(Math.random()*personas.length);
  id2 = Math.floor(Math.random()*personas.length);
  if (patrimonios[0] > patrimonios[1]) {
    contadorPuntos++;
    if (id1 === id2) {
      id2 = Math.floor(Math.random()*personas.length);
      showOptions(id1,id2);
    } 
    else showOptions(id1,id2);
  } 
  else {
    contenedorPadre.innerHTML = "";
    contenedorPadre.src = "http://4.bp.blogspot.com/-jfgEviFjbIc/VmgDC6NbvwI/AAAAAAAA--I/_2YV-ISdCYs/s1600/futbol.jpg";
    const cloneGameOver = templateGameOver.content.cloneNode(true);
    cloneGameOver.querySelector(".final-score .score").textContent = `Your Score ${contadorPuntos}!`;
    contadorPuntos = 0;
    contenedorPadre.appendChild(cloneGameOver);
    contenedorPadre.children[0].children[1].addEventListener("click",menu)
  }
}

const lessMoney = ()=> {
  id1 = Math.floor(Math.random()*personas.length);
  id2 = Math.floor(Math.random()*personas.length);
  console.log(id1);
  console.log(id2);
  if (patrimonios[0] < patrimonios[1]) {
    contadorPuntos++;
    if (id1 === id2) {
      id2 = Math.floor(Math.random()*personas.length);
      showOptions(id1,id2);
    } else showOptions(id1,id2);
  } 
  else {
    contenedorPadre.innerHTML = "";
    contenedorPadre.src = "http://4.bp.blogspot.com/-jfgEviFjbIc/VmgDC6NbvwI/AAAAAAAA--I/_2YV-ISdCYs/s1600/futbol.jpg";
    const cloneGameOver = templateGameOver.content.cloneNode(true);
    cloneGameOver.querySelector(".final-score .score").textContent = `Your Score ${contadorPuntos}!`;
    contadorPuntos = 0;
    contenedorPadre.appendChild(cloneGameOver);
    contenedorPadre.children[0].children[1].addEventListener("click",menu)
  }
}
  
const menu = ()=> {
  contenedorPadre.innerHTML = "";
  contenedor1.innerHTML = "";
  contenedor2.innerHTML = "";
  contenedor1.appendChild(start);
  contenedorPadre.appendChild(contenedor1);
}


 



  

  

