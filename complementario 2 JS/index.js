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
  personas.push(new Persona("Faiq Bolkiah",18000));
  
  let respuesta;
  let salida = true;
  let puntos = 0;
  let contador = 0;

  alert("Bienvenido a adivina ¿Quién es más rico?");

  const showOption = (random1,random2)=> {
    respuesta = parseInt( prompt(`Quién es más rico:\n 1. ${personas[random1].nombre}\n 2. ${personas[random2].nombre}`));
    return respuesta;
  }

  const lastTry = ()=> {
    contador++;
    if (respuesta != 1 && respuesta != 2 && contador <= 1) {
      alert("La opción es incorrecta\n\nUltimo intento, si te equívocas pierdes. ¡OJO!");
      showResult(random1,random2);
    }
    else if (contador > 1) {
      alert("Demásiados intentos.\n\nHas perdido, lo lamento!");
      salida = false;
    }
    return salida;
  }
  
  const showResult = (random1,random2)=> {
    if (random1 == random2) {
      showOption(random1,random2 - 1);
      if (respuesta == 1) { 
        if (personas[random1].patrimonio > personas[random2 - 1].patrimonio) {
          puntos += 1;
          alert(`Tu respuesta es: ${personas[random1].nombre}.\nCorrecto!\n\n${personas[random1].nombre} es más rico que ${personas[random2 - 1].nombre}`);
        } else {
          alert(`Tu respuesta es: ${personas[random1].nombre}.\nIncorrecto!\n\n${personas[random2 - 1].nombre} es más rico que ${personas[random1].nombre}`);
          alert("Has perdido!\n\nTotal de puntos: "+ puntos);
          salida = false;
        }
      } 
      else if (respuesta == 2) {
        if (personas[random2].patrimonio > personas[random1].patrimonio) {
          puntos += 1;
          alert(`Tu respuesta es: ${personas[random2].nombre}.\nCorrecto!\n\n${personas[random2].nombre} es más rico que ${personas[random1].nombre}`);
        } else {
          alert(`Tu respuesta es: ${personas[random2].nombre}.\nIncorrecto!\n\n${personas[random1].nombre} es más rico que ${personas[random2].nombre}`);
          alert("Has perdido!\n\nTotal de puntos: "+ puntos);
          salida = false;
        }
      }
      else lastTry();
    } 
    else if (random1 != random2) {
      showOption(random1,random2);
      if (respuesta == 1) { 
        if (personas[random1].patrimonio > personas[random2].patrimonio) {
          puntos += 1;
          alert(`Tu respuesta es: ${personas[random1].nombre}.\nCorrecto!\n\n${personas[random1].nombre} es más rico que ${personas[random2].nombre}`);
        } else {
          alert(`Tu respuesta es: ${personas[random1].nombre}.\nIncorrecto!\n\n${personas[random2].nombre} es más rico que ${personas[random1].nombre}`);
          alert("Has perdido!\n\nTotal de puntos: "+ puntos);
          salida = false;
        }
      } 
      else if (respuesta == 2) {
        if (personas[random2].patrimonio > personas[random1].patrimonio) {
          puntos += 1;
          alert(`Tu respuesta es: ${personas[random2].nombre}.\nCorrecto!\n\n${personas[random2].nombre} es más rico que ${personas[random1].nombre}`);
        } else {
          alert(`Tu respuesta es: ${personas[random2].nombre}.\nIncorrecto!\n\n${personas[random1].nombre} es más rico que ${personas[random2].nombre}`);
          alert("Has perdido!\n\nTotal de puntos: "+ puntos);
          salida = false;
        }
      }
      else lastTry();
    }
  }
  // 
  while (salida) {
    random1 = Math.floor(Math.random()*10);
    random2 = Math.floor(Math.random()*10);
    showResult(random1,random2)
  }
  
  if (!salida) console.log("Acumulastes todos estos puntos: " + puntos + "\n¡Felicitaciones!");