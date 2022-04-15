const pregunta1 = document.querySelector(".pregunta-1");
const pregunta2 = document.querySelector(".pregunta-2");
const start = document.querySelector(".play");
const contenedor1 = document.querySelector(".start-container");
const contenedor2 = document.querySelector(".game-container");
const options = document.querySelector(".options"); 
const contenedorPadre = document.querySelector(".contenedor");

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

  const menu = document.createElement("DIV");
  menu.textContent = "Menu";
  menu.classList.add("menu")

  const divOptions = document.createElement("DIV");
  const divRicher = document.createElement("DIV");
  const divLessMoney = document.createElement("DIV");

  divRicher.textContent = "Richer";
  divLessMoney.textContent = "Less money";

  const nameTwo = document.createElement("P");
  nameTwo.classList.add("name-2")
  
  divOptions.appendChild(nameTwo);
  divOptions.appendChild(divRicher);
  divOptions.appendChild(divLessMoney);

  divOptions.classList.add("options");

  const contenedorNames = document.createElement("DIV");
  const nameOne = document.createElement("P");

  contenedorNames.appendChild(nameOne);
  contenedorNames.classList.add("name-one");

  const image1 = document.createElement("IMG");
  const image2 = document.createElement("IMG");
 
  const puntos = document.createElement("DIV");
  puntos.classList.add("score");

  let id1;
  let id2;
  let contadorPuntos = 0;
  let patrimonios = [];

  start.addEventListener("click",()=> {
    contenedor1.innerHTML = "<div class='after-play'>VS</div>";
    id1 = Math.floor(Math.random()*personas.length);
    id2 = Math.floor(Math.random()*personas.length);
   
    const afterPlay = (id1,id2)=> {
      image1.src = `${personas[id1].imagen}`;
      image2.src = `${personas[id2].imagen}`;
      nameOne.textContent = `"${personas[id1].nombre}"`;
      nameTwo.textContent = `"${personas[id2].nombre}"`; 
      pregunta1.appendChild(image1);
      pregunta2.appendChild(image2);
      contenedor2.appendChild(contenedorNames);
      contenedor2.appendChild(divOptions);
    }

    if (id1 === id2) {
      id2 = Math.floor(Math.random()*personas.length);
      afterPlay(id1,id2);
      patrimonios = [personas[id2].patrimonio,personas[id1].patrimonio];
    } else {
      afterPlay(id1,id2);
      patrimonios = [personas[id2].patrimonio,personas[id1].patrimonio];
    }
    return console.log(patrimonios)
  })
  
  const showOptions = (id1,id2)=> {
    image1.src = `${personas[id1].imagen}`;
    image2.src = `${personas[id2].imagen}`;

    nameOne.textContent = `"${personas[id1].nombre}"`;
    nameTwo.textContent = `"${personas[id2].nombre}"`;  

    pregunta1.appendChild(image1);
    pregunta2.appendChild(image2);

    patrimonios = [personas[id2].patrimonio,personas[id1].patrimonio];
    return patrimonios[id2,id1];
} 

  divRicher.addEventListener("click",()=> {
    id1 = Math.floor(Math.random()*personas.length);
    id2 = Math.floor(Math.random()*personas.length);
      if (patrimonios[0] > patrimonios[1]) {
        contadorPuntos++;
        if (id1 === id2) {
          id2 = Math.floor(Math.random()*personas.length);
          showOptions(id1,id2);
        } else showOptions(id1,id2);
      } else {
        contenedorPadre.innerHTML = "";
        contenedorPadre.src = "http://4.bp.blogspot.com/-jfgEviFjbIc/VmgDC6NbvwI/AAAAAAAA--I/_2YV-ISdCYs/s1600/futbol.jpg";
        puntos.textContent = `Your Score ${contadorPuntos}!`;
        contadorPuntos = 0;
        contenedorPadre.classList.add("final-score");
        contenedorPadre.appendChild(puntos);
        contenedorPadre.appendChild(menu);
      }
  })

  divLessMoney.addEventListener("click",()=> {
    id1 = Math.floor(Math.random()*personas.length);
    id2 = Math.floor(Math.random()*personas.length);
      if (patrimonios[0] < patrimonios[1]) {
        contadorPuntos++;
        if (id1 === id2) {
          id2 = Math.floor(Math.random()*personas.length);
          showOptions(id1,id2);
        } else showOptions(id1,id2);
      } else {
        contenedorPadre.innerHTML = "";
        contenedorPadre.src = "http://4.bp.blogspot.com/-jfgEviFjbIc/VmgDC6NbvwI/AAAAAAAA--I/_2YV-ISdCYs/s1600/futbol.jpg";
        puntos.textContent = `Your Score ${contadorPuntos}!`;
        contadorPuntos = 0;
        contenedorPadre.classList.add("final-score");
        contenedorPadre.appendChild(puntos);
        contenedorPadre.appendChild(menu);
      }
  })

  menu.addEventListener("click",()=> {
    contenedorPadre.innerHTML = "";
    contenedor1.innerHTML = "";
    contenedor2.innerHTML = "";
    pregunta1.innerHTML = "";
    pregunta2.innerHTML = "";
    contenedor1.appendChild(start)
    contenedor2.appendChild(pregunta1);
    contenedor2.appendChild(pregunta2);
    contenedorPadre.appendChild(contenedor1);
    contenedorPadre.appendChild(contenedor2);
  })
  

  

