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

personas.push(new Persona("Francesco Totti",89000000,"imagenes/totti.jpg"));
personas.push(new Persona("Mathieu Flamini",97000000,"imagenes/flamini.jpg"));
personas.push(new Persona("Andrés Iniesta",106000000,"imagenes/iniesta.jpg"));
personas.push(new Persona("Gareth Bale",124000000,"imagenes/bale.jpg"));
personas.push(new Persona("Neymar",164000000,"imagenes/neymar.jpg"));
personas.push(new Persona("Zlatan Ibrahimovic",168000000,"imagenes/zatlan.jpg"));
personas.push(new Persona("Lionel Messi",355000000,"imagenes/messi.jpg"));
personas.push(new Persona("David Beckham",400000000,"imagenes/beckham.jpg"));
personas.push(new Persona("Cristiano Ronaldo",1000000000,"imagenes/cristiano.jpg"));
personas.push(new Persona("Faiq Bolkiah",1800000000,"imagenes/bolkhia.jpg"));
personas.push(new Persona("Roger Federer",106300000,"imagenes/federer.jpg"));
personas.push(new Persona("Lebron James",88200000,"imagenes/lebron.jpg"));
personas.push(new Persona("Dwayne Johnson 'The Rock'",87500000,"imagenes/rock.jpg"));
personas.push(new Persona("James Patterson",80000000,"imagenes/patterson.jpg"));
personas.push(new Persona("Stephen Curry",74400000,"imagenes/curry.jpg"));
personas.push(new Persona("Ariana Grande",72000000,"imagenes/grande.jpg"));
personas.push(new Persona("Ryan Reynolds",71500000,"imagenes/ryan.jpg"));
personas.push(new Persona("Gordon Ramsay",70000000,"imagenes/gordon.jpg"));
personas.push(new Persona("Jonas Brothers",68500000,"imagenes/jonas.jpg"));
personas.push(new Persona("The Chainsmokers",68000000,"imagenes/smokers.jpg"));
personas.push(new Persona("Ed Sheeran",64000000,"imagenes/edsheeran.jpg"));
personas.push(new Persona("Kevin Durant",63900000,"imagenes/durant.jpg"));
personas.push(new Persona("Taylor Swift",63500000,"imagenes/taylor.jpg"));
personas.push(new Persona("J.K. Rowlilng",60000000,"imagenes/jk.jpg"));
personas.push(new Persona("Ben Affleck",55000000,"imagenes/ben.jpg"));
personas.push(new Persona("Shawn Mendes",54500000,"imagenes/mendez.jpg"));
personas.push(new Persona("Vin Diesel",54000000,"imagenes/diesel.jpg"));
personas.push(new Persona("Bilie Elish",53000000,"imagenes/billie.jpg"));
personas.push(new Persona("Drake",49000000,"imagenes/drake.jpg"));
personas.push(new Persona("Conor Mcgregor",48000000,"imagenes/conor.jpg"));

let id1;
let id2;
let patrimonios = [];
let contadorPuntos = 0;

const highScore = ()=> {
  let serializado = JSON.stringify(contadorPuntos);
  localStorage.setItem("puntos",serializado);

  return contadorPuntos
  
}


// localStorage.clear()
start.addEventListener("click",()=> {      
  const cloneVs = templateVs.content.cloneNode(true); 
  contenedor1.replaceChild(cloneVs,start)
  const cloneGame = templateGame.content.cloneNode(true);
  const afterPlay = (id1,id2)=> {
    if (cloneGame.hasChildNodes()) {
      cloneGame.children[0].children[0].src = `${personas[id1].imagen}`;
      cloneGame.children[1].children[0].src = `${personas[id2].imagen}`;
      
      cloneGame.children[2].children[0].textContent = `"${personas[id1].nombre}"`;
      cloneGame.children[2].children[1].textContent = `has`;
      let numero = personas[id1].patrimonio;
      const nuevo = numero.toLocaleString('en');
      cloneGame.children[2].children[2].textContent = `${nuevo}`;
      cloneGame.children[3].children[0].textContent = `"${personas[id2].nombre}"`;
      // console.log(puntosFromLS)
     
      cloneGame.querySelector(".name-one .h3-3").textContent = `High Score: ${localStorage.getItem("puntos")}`;
      cloneGame.querySelector(".options .h3-4").textContent = `Score: ${contadorPuntos}`;
      
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
    patrimonios = [personas[id1].patrimonio,personas[id2].patrimonio];
    console.log(patrimonios[0]," ",patrimonios[1])
  } 
  else {
    afterPlay(id1,id2);
    patrimonios = [personas[id1].patrimonio,personas[id2].patrimonio];
    console.log(patrimonios[0]," ",patrimonios[1])
  }
})

const showOptions = (id1,id2)=> {
  contenedor2.children[0].children[0].src = `${personas[id1].imagen}`;
  contenedor2.children[1].children[0].src = `${personas[id2].imagen}`;
      
  contenedor2.children[2].children[0].textContent = `"${personas[id1].nombre}"`;
  contenedor2.children[2].children[1].textContent = `has`;
  let numero = personas[id1].patrimonio;
  const nuevo = numero.toLocaleString('en');
  contenedor2.children[2].children[2].textContent = `${nuevo}`;
  contenedor2.children[3].children[0].textContent = `"${personas[id2].nombre}"`;
  contenedor2.querySelector(".options .h3-4").textContent = `Score: ${contadorPuntos}`;

  patrimonios = [personas[id1].patrimonio,personas[id2].patrimonio];
  console.log(typeof +patrimonios[0])
  console.log(patrimonios[0]," ",patrimonios[1])
  return patrimonios[id1,id2];
} 


const richer = ()=> {
  id1 = Math.floor(Math.random()*personas.length);
  id2 = Math.floor(Math.random()*personas.length);
  if (parseInt(patrimonios[1]) > parseInt(patrimonios[0])) {
    contadorPuntos++;
    setTimeout(()=> {contenedor2.querySelector(".options .h3-4").classList.add("animacion-score")},0);
    contenedor2.querySelector(".options .h3-4").classList.remove("animacion-score")

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
    // let serializado = JSON.stringify(contadorPuntos);
    //   localStorage.setItem("puntos",serializado);
    //   let deserializado = localStorage.getItem("puntos");
    //   let puntosFromLS = JSON.parse(deserializado);
    //   puntosFromLS === null ? puntosFromLS = 0 : localStorage.getItem("puntos");
    localStorage.getItem("puntos") > contadorPuntos ? console.log("lo que esta en el ls es mayor") : highScore();
    
    cloneGameOver.querySelector(".final-score .score").textContent = `Your Score ${contadorPuntos}!`;
    contadorPuntos = 0;
    contenedorPadre.appendChild(cloneGameOver);
    contenedorPadre.children[0].children[1].addEventListener("click",menu)
  }
}

const lessMoney = ()=> {
  id1 = Math.floor(Math.random()*personas.length);
  id2 = Math.floor(Math.random()*personas.length);
  if (parseInt(patrimonios[1]) < parseInt(patrimonios[0])) {
    contadorPuntos++;
    setTimeout(()=> {contenedor2.querySelector(".options .h3-4").classList.add("animacion-score")},0);
    contenedor2.querySelector(".options .h3-4").classList.remove("animacion-score")
 

    if (id1 === id2) {
      id2 = Math.floor(Math.random()*personas.length);
      showOptions(id1,id2);
    } else showOptions(id1,id2);
  } 
  else {
    contenedorPadre.innerHTML = "";
    contenedorPadre.src = "http://4.bp.blogspot.com/-jfgEviFjbIc/VmgDC6NbvwI/AAAAAAAA--I/_2YV-ISdCYs/s1600/futbol.jpg";
    const cloneGameOver = templateGameOver.content.cloneNode(true);
    // let serializado = JSON.stringify(contadorPuntos);
    //   localStorage.setItem("puntos",serializado);
    //   let deserializado = localStorage.getItem("puntos");
    //   let puntosFromLS = JSON.parse(deserializado);
    //   puntosFromLS === null ? puntosFromLS = 0 : localStorage.getItem("puntos");
    localStorage.getItem("puntos") > contadorPuntos ? console.log("lo que esta en el ls es mayor") : highScore();

    
    cloneGameOver.querySelector(".final-score .score").textContent = `Your Score ${contadorPuntos}!`;
    contadorPuntos = 0;
    contenedorPadre.appendChild(cloneGameOver);
    contenedorPadre.children[0].children[1].addEventListener("click",menu)
  }
}
// localStorage.clear()
  
const menu = ()=> {
  contenedorPadre.innerHTML = "";
  contenedor1.innerHTML = "";
  contenedor2.innerHTML = "";
  contenedor1.appendChild(start);
  contenedorPadre.appendChild(contenedor1);
}


 



  

  

