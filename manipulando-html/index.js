const preguntas = document.querySelector(".pregunta");
const resultado = document.querySelector(".resultado");
const bienvenido = document.querySelector(".bienvenido");

bienvenido.textContent   = "Bienvenido a adivina ¿Quién es más millonario?";

class Persona {
    constructor(nombre,patrimonio) {
      this.nombre = nombre;
      this.patrimonio = patrimonio;
    }
  
  }
  
  const personas = [];
  
  personas.push(new Persona("Francesco Totti",89));
  personas.push(new Persona("Mathieu Flamini",97));
  personas.push(new Persona("Andrés Iniesta",106));
  personas.push(new Persona("Gareth Bale",124));
  personas.push(new Persona("Neymar",164));
  personas.push(new Persona("Zlatan Ibrahimovic",168));
  personas.push(new Persona("Lionel Messi",355));
  personas.push(new Persona("David Beckham",400));
  personas.push(new Persona("Cristiano Ronaldo",1000));
  personas.push(new Persona("Faiq Bolkiah",1800));
  personas.push(new Persona("Roger Federer",106.3));
  personas.push(new Persona("Lebron James",88.2));
  personas.push(new Persona("Dwayne Johnson 'The Rock'",87.5));
  personas.push(new Persona("James Patterson",80));
  personas.push(new Persona("Stephen Curry",74.4));
  personas.push(new Persona("Ariana Grande",72));
  personas.push(new Persona("Ryan Reynolds",71.5));
  personas.push(new Persona("Gordon Ramsay",70));
  personas.push(new Persona("Jonas Brothers",68.5));
  personas.push(new Persona("The Chainsmokers",68));
  personas.push(new Persona("Ed Sheeran",64));
  personas.push(new Persona("Kevin Durant",63.9));
  personas.push(new Persona("Taylor Swift",63.5));
  personas.push(new Persona("J.K. Rowlilng",60));
  personas.push(new Persona("Ben Affleck",55));
  personas.push(new Persona("Shawn Mendes",54.5));
  personas.push(new Persona("Vin Diesel",54));
  personas.push(new Persona("Bilie Elish",53));
  personas.push(new Persona("Drake",49));
  personas.push(new Persona("Conor Mcgregor",48));
  personas.push(new Persona("Jennifer Lopez",47.5));
  personas.push(new Persona("Rihanna",46));
  personas.push(new Persona("Tom Brady",45));
  personas.push(new Persona("Novak Djokovic",44.6));
  personas.push(new Persona("Will Smith",44.5));
  personas.push(new Persona("Sofia Vergara",43));
  personas.push(new Persona("Celine Dion",42));
  personas.push(new Persona("Kyrie Irving",41.9));
  personas.push(new Persona("Adam Sandler",41));
  personas.push(new Persona("Jackie Chan",40));
  personas.push(new Persona("Katy Perry",38.5));
  personas.push(new Persona("Lady Gaga",38));
  personas.push(new Persona("Agelina Jolii",35.5));
  personas.push(new Persona("Mohamed Salah",35.1));
  // personas.push(new Persona("",));
  // personas.push(new Persona("",));
  // personas.push(new Persona("",));
  // personas.push(new Persona("",));
  
  
  let respuesta;
  let salida = true;
  let puntos = 0;
  let contador = 0;

  const showOption = (id1,id2)=> {
    alert("Bienvenido a adivina ¿Quién es más rico?");
    respuesta = parseInt( prompt(`Quién es más rico:\n 1. ${personas[id1].nombre}\n 2. ${personas[id2].nombre}`));
    return respuesta;
  }

  const optionOne = (id1,id2)=> {
    if (personas[id1].patrimonio > personas[id2].patrimonio) {
      puntos += 1;
      alert(`Tu respuesta es: ${personas[id1].nombre}.\nCorrecto!\n\n${personas[id1].nombre} es más rico que ${personas[id2].nombre}`);
      preguntas.innerHTML += `<div><i class='fa-solid fa-check'></i>Quién es más rico:</div><div>1. ${personas[id1].nombre}</div><div>2. ${personas[id2].nombre}</div></li>`;
    } else {
      alert(`Tu respuesta es: ${personas[id1].nombre}.\nIncorrecto!\n\n${personas[id2].nombre} es más rico que ${personas[id1].nombre}`);
      preguntas.innerHTML += `<div><i class='fa-solid fa-xmark'></i>Quién es más rico:</div><div>1. ${personas[id1].nombre}</div><div>2. ${personas[id2].nombre}</div></li>`;
      alert("Has perdido!\n\nTotal de puntos: "+ puntos);
      resultado.innerHTML += `<div>Has perdido!</div><div>Total de puntos: ${puntos}</div>`;
      salida = false;
    }
  }

  const optionTwo = (id1,id2)=> {
    if (personas[id2].patrimonio > personas[id1].patrimonio) {
      puntos += 1;
      alert(`Tu respuesta es: ${personas[id2].nombre}.\nCorrecto!\n\n${personas[id2].nombre} es más rico que ${personas[id1].nombre}`);
      preguntas.innerHTML += `<div><i class='fa-solid fa-check'></i>Quién es más rico:</div><div>1. ${personas[id1].nombre}</div><div>2. ${personas[id2].nombre}</div></li>`;
    } else {
      alert(`Tu respuesta es: ${personas[id2].nombre}.\nIncorrecto!\n\n${personas[id1].nombre} es más rico que ${personas[id2].nombre}`);
      preguntas.innerHTML += `<div><i class='fa-solid fa-xmark'></i>Quién es más rico:</div><div>1. ${personas[id1].nombre}</div><div>2. ${personas[id2].nombre}</div></li>`;
      alert("Has perdido!\n\nTotal de puntos: "+ puntos);
      resultado.innerHTML += `<div>Has perdido!</div><div>Total de puntos: ${puntos}</div>`;
      salida = false;
    }
  }

  const lastTry = (id1,id2)=> {
    contador++;
    if (respuesta != 1 && respuesta != 2 && contador <= 1) {
      alert("La opción es incorrecta\n\nUltimo intento, si te equívocas pierdes. ¡OJO!");
      preguntas.innerHTML += `<div><i class='fa-solid fa-xmark'></i>Quién es más rico:</div><div>1. ${personas[id1].nombre}</div><div>2. ${personas[id2].nombre}</div></li>`;
    }
    else if (contador > 1) {
      alert("Demásiados intentos.\n\nHas perdido, lo lamento!");
      resultado.innerHTML = `<div>Has perdido!</div><div>Total de puntos: ${puntos}</div>`;
      salida = false;
      preguntas.innerHTML += `<div><i class='fa-solid fa-xmark'></i>Quién es más rico:</div><div>1. ${personas[id1].nombre}</div><div>2. ${personas[id2].nombre}</div></li>`;
    }
    return salida
  }
  
  const showResult = (id1,id2)=> {
    if (id1 == id2) {
      showOption(id1,id2);
      if (respuesta == 1) { 
        optionOne(id1,id2);
      } 
      else if (respuesta == 2) {
        optionTwo(id1,id2);
      }
      else lastTry(id1,id2);
    } 
    else {
      showOption(id1,id2);
      if (respuesta == 1) { 
        optionOne(id1,id2);
      } 
      else if (respuesta == 2) {
        optionTwo(id1,id2);
      }
      else lastTry(id1,id2);
    }
  }
  // 
  while (salida) {
    id1 = Math.floor(Math.random()*personas.length);
    id2 = Math.floor(Math.random()*personas.length);
    if (id1 === id2) {
      id2 = Math.floor(Math.random()*personas.length);
      showResult(id1,id2);
    }
    else showResult(id1,id2);
  }
  
  if (!salida) console.log("Acumulastes todos estos puntos: " + puntos + "\n¡Felicitaciones!");



