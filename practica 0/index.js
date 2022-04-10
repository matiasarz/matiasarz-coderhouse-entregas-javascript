
const productos = [
    {
        producto: "manzana",
        precio: 1000,
    },
    {
        producto: "pera",
        precio: 2500,
    },
    {
        producto: "banana",
        precio: 4500,
    },
]

let aumento = parseInt(prompt("Ingrese el porcentaje aumentar"));
aumento /= 100;
console.log(aumento);
const actualizado = productos.map(item=> { 
    return item.precio + item.precio * aumento;
})

console.log(actualizado);