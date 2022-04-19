// const imagen1 = document.createElement("IMG");
// const imagen2 = document.createElement("IMG");
// const container = document.getElementById("container");

// const futbolista = [
//     {
//         name: "bale",
//         src: "eventos/imagenes/bale.jpg"
//     },
//     {
//         name: "cristiano",
//         src: "eventos/imagenes/cristiano.jpg"
//     },
//     {
//         name: "messi",
//         src: "eventos/imagenes/messi.jpg"
//     },
//     {
//         name: "neymar",
//         src: "eventos/imagenes/neymar.jpg"
//     },
// ]

// let id1 = Math.floor(Math.random()*futbolista.length);
// let id2 = Math.floor(Math.random()*futbolista.length);

// const informacion = (id1,id2)=> {
//     const imagenes = [futbolista[id1].src,futbolista[id2].src];
//     const nombres = [futbolista[id1].name,futbolista[id2].name];
//     return info = [nombres,imagenes]
// }

// if (id1 === id2) {
//     id2 = Math.floor(Math.random()*futbolista.length);
//     console.table(informacion(id1,id2));
// } else console.table(informacion(id1,id2));

// imagen1.src = `${info[1][0]}`;
// imagen2.src = `${info[1][1]}`;

// imagen1.style.width = "fit-content";
// imagen1.style.height = "fit-content";
// imagen2.style.width = "fit-content";
// imagen2.style.height = "fit-content";

// container.appendChild(imagen1);
// container.appendChild(imagen2);


const animal = {
    perro: "carlos",
    gato: "tubu"
}

let { perro,gato } = animal;


animal.pajaro ?? console.log(animal.pajaro);

console.log(animal.pajaro)
// console.log("perro: "+ perro,"gato: " + gato,"pajaro: " + pajaro)