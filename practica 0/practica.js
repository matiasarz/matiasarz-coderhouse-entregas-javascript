class Usuario {
    constructor (user,raza,clase) { 
    this.user = user;
    this.raza = raza;
    this.clase = clase;
    }
}
    
    
    let salida = true;
    const elegirRaza = (a)=> {
        let menu = parseInt(prompt("Que raza desea ser:\n 1. Humano 2. Perro 3. Monstruo"));
        switch(menu) {
            case 1:
                a.raza = "Humano";
                break;
            case 2:
                a.raza = "Perro";
                break;
            case 3: 
                a.raza = "Monstrou";
                break;
            default:
                elegirRaza(a);
                break;
            }
        return a.raza;
    }
    const elegirClase = (b)=> {
        let menu = parseInt(prompt("Que raza desea ser:\n 1. Orco 2. Vampiro 3. Lobizon"));
        switch(menu) {
            case 1:
                b.clase = "Orco";
                break;
            case 2:
                b.clase = "Vampiro";
                break;
            case 3: 
                b.clase = "Lobizon";
                break;
            default:
                elegirClase(b);
                break;
        }
        return b.clase;
    }
    
    const obj = [];
    

    while (salida) { 
        if (confirm("Desea crear un nuevo usuario")) {
            obj.push(new Usuario(prompt("Ingrese su nombre de usuario"),elegirRaza(Usuario),elegirClase(Usuario)));
        } else { 
        salida = false;
        }
    }
    for (let i = 0; i < obj.length; i++) {
        alert(`Usuarios creados:\n Nombre del usuario ${i + 1}: ${obj[i].user}\n Raza del usuario ${i + 1}: ${obj[i].raza}\n Clase del usuario ${i + 1}: ${obj[i].clase}`);
    }
console.log(obj)


