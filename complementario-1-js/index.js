class Paises {
    constructor(pais,poblacion,capital,turismo,moneda) {
        this.pais = pais;
        this.poblacion = poblacion;
        this.capital = capital;
        this.turismo = turismo;
        this.moneda = moneda;
    }
    mostrarPoblacion() {
        alert(`La población de ${this.pais} es de ${this.poblacion} de habitantes`);
    }
    mostrarCapital() {
        alert(`La Capital de ${this.pais} es ${this.capital}`);
    }
    destinoTurismo() {
        alert(`Los destinos turisticos de ${this.pais} son: ${this.turismo}`);
    }
    mostrarMoneda() {
        alert(`La moneda de ${this.pais} es el ${this.moneda}`);
    }
    
}

const argentina = new Paises("Argentina","45 millones","Buenos Aires","\nBariloche\nMendoza","Peso argentino");
const mexico = new Paises("México","128.9 millones","Ciudad de México","\nZona Arqueológica de Tulum\nChichén Itza\nMuseo Nacional Frida Kahlo","Peso mexicano");
const canada = new Paises("Canada","38.01 millones","Ottawa","\nToronto\nVancouver\nQuebec","Dólar canadiense");
const estadosUnidos = new Paises("Estados Unidos","329.5 millones","Washington","\nMiami\nNueva York\nLos Ángeles","Dólar estadounidense");
const brasil = new Paises("Brasil","212.6 millones","Brasilia","\nPan de Azúcar\nRio de Janeiro\nCristo Redentor","Real brasileño");
const españa = new Paises("España","47.35 millones","Madrid","\nTenerife\nMallorca\nBarcelona","Euro");
const alemania = new Paises("Alemania","83.24 millones","Berlin","\nMunich\nFrancfort del Meno\nHamburgo","Euro");
const francia = new Paises("Francia","67.39 millones","París","\nMuseo del Louvre\nTorre Eiffel\nCatedral de Notre Dame","\nEuro\nFranco CFP");
const inglaterra = new Paises("Inglaterra","67.22 millones","Londres","\nEdimburgo\nMánchester\nGlasgow","Libra esterlina");
const austria = new Paises("Austria","8.92 millones","Viena","\nSalzburgo\nInnsbruck\nHallstatt","Euro");
const egipto = new Paises("Egipto","102.3 millones","El Cairo","\nTemplo de Ramsés II\nLa Esfinge\nAlejandría","Libra Egipcia");
const marruecos = new Paises("Marruecos","36.91 millones","Rabat","\nMarrakech\nFez\nCasablanca","Dírham marroquí");
const sudafrica = new Paises("Sudáfrica","59.31 millones","Ciudad del Cabo","\nParque nacional Kruger\nDurban\nStellenbosch","Rand sudafricano");
const kenia = new Paises("Kenia","53.77 millones","Nairobi","\nLago Nakuru\nMombasa\nParque Nacional de Nairobi","Chelín keniano");
const camerun = new Paises("Camerún","26.55 millones","Yaundé","\nDuala\nLimbe\nKribi","Franco CFA de África Central");
const china = new Paises("China","1.402 miles de millones","Pekín","\nShanghaí\nNankín\nGuilin","Renminbi");
const india = new Paises("India","1.38 miles de millones","Nueva Delhi","\nBombay\nGoa\nBangalore","Rupia india");
const japon = new Paises("Japón","125.8 millones","Tokio","\nKioto\nOsaka\nHiroshima","Yen japonés");
const tailandia = new Paises("Tailandia","69.8 millones","Bangkok","\nChiang Mai\nPhuket\nKo Samui","Baht tailandés");
const libano = new Paises("Líbano","6.825 millones","Beirut","\nBiblos\nBaalbek\nSidón","Libra libanesa");
const australia = new Paises("Australia","25.69 millones","Canberra","\nSidney\nMelbourne\nBrisbane","Dólar australiano");
const nuevaZelanda = new Paises("Nueva Zelanda","5.084 millones","Wellington","\nQueenstown\nAuckland\nMilford Sound","Dólar neozelandés");
const samoa = new Paises("Samoa","198,410 miles","Apia","\nLalomanu Beach\nPapaseea Sliding Rocks\nTo-Sua Ocean Trench","Tālā");
const fiyi = new Paises("Fiyi","896,444 miles","Suva","\nIslas Mamanuca\nYasawa Group\nQalito Island","Dólar fiyiano");
const tonga = new Paises("Tonga","105,697 miles","Nukualofa","\nHa'atafu Beach\nMapu'a Vaea Blowholes\nHa'amonga'a Maui Trilithon","Pa'anga");

let entrada = confirm("¿Desea continuar?");
let mainMenu;
let menu;
let submenu;

const mostrarInformacionDePais = (pais) => {
    do {
        submenu = parseInt(prompt("Seleccione un País:\n1. Poblacion\n2. Capital\n3. Turismo\n4. Moneda\n00. Volver"));
    switch (submenu) {
        case 1: 
        pais.mostrarPoblacion();
        break;
        case 2: 
        pais.mostrarCapital();
        break;
        case 3: 
        pais.destinoTurismo();
        break;
        case 4: 
        pais.mostrarMoneda();
        break;
        case 00:
        break;
        default: 
        alert("La opción ingresada no es válida, vuelva a intentar");
        break;
    } 
}  while (submenu != 00);

}

if (entrada) {
    alert("Bienvenido a por el mundo");
    do {
        mainMenu = parseInt(prompt("Seleccione un Continente:\n1. América\n2. Europa\n3. Africa\n4. Asia\n5. Oceanía\n0. Salir"));
        switch (mainMenu) {
            case 1:
            do {
                menu = parseInt(prompt("Seleccione un País:\n1. Argentina\n2. México\n3. Canadá\n4. Estados Unidos\n5. Brasil\n00. Volver"));
                switch(menu) {
                    case 1:
                    mostrarInformacionDePais(argentina);
                    break;
                    case 2:
                    mostrarInformacionDePais(mexico);
                    break;
                    case 3:
                    mostrarInformacionDePais(canada);
                    break;
                    case 4:
                    mostrarInformacionDePais(estadosUnidos);
                    break;
                    case 5:
                    mostrarInformacionDePais(brasil);
                    break;
                    case 00:
                        break;
                    default:
                        alert("Vuelva a intentar");
                        break;
                }
                
            } while(menu != 00);
            break;
            case 2:
            do {
                menu = parseInt(prompt("Seleccione un País:\n1. España\n2. Alemania\n3. Francia\n4. Inglaterra\n5. Austria\n00. Volver"));
                switch(menu) {
                    case 1:
                    mostrarInformacionDePais(españa);
                    break;
                    case 2:
                    mostrarInformacionDePais(alemania);
                    break;
                    case 3:
                    mostrarInformacionDePais(francia);
                    break;
                    case 4:
                    mostrarInformacionDePais(inglaterra);
                    break;
                    case 5:
                    mostrarInformacionDePais(austria);
                    break;
                    case 00:
                        break;
                    default:
                        alert("Vuelva a intentar");
                        break;
                }
                
            } while(menu != 00);
            break;
            case 3:
            do {
                menu = parseInt(prompt("Seleccione un País:\n1. Egipto\n2. Marruecos\n3. Sudafrica\n4. Kenia\n5. Camerun\n00. Volver"));
                switch(menu) {
                    case 1:
                    mostrarInformacionDePais(egipto);
                    break;
                    case 2:
                    mostrarInformacionDePais(marruecos);
                    break;
                    case 3:
                    mostrarInformacionDePais(sudafrica);
                    break;
                    case 4:
                    mostrarInformacionDePais(kenia);
                    break;
                    case 5:
                    mostrarInformacionDePais(camerun);
                    break;
                    case 00:
                        break;
                    default:
                        alert("Vuelva a intentar");
                        break;
                }
                
            } while(menu != 00);
            break;
            case 4:
            do {
                menu = parseInt(prompt("Seleccione un País:\n1. China\n2. India\n3. Japon\n4. Tailandia\n5. Libano\n00. Volver"));
                switch(menu) {
                    case 1:
                    mostrarInformacionDePais(china);
                    break;
                    case 2:
                    mostrarInformacionDePais(india);
                    break;
                    case 3:
                    mostrarInformacionDePais(japon);
                    break;
                    case 4:
                    mostrarInformacionDePais(tailandia);
                    break;
                    case 5:
                    mostrarInformacionDePais(libano);
                    break;
                    case 00:
                        break;
                    default:
                        alert("Vuelva a intentar");
                        break;
                }
                
            } while(menu != 00);
            break;
            case 5:
            do {
                menu = parseInt(prompt("Seleccione un País:\n1. Australia\n2. Nueva Zelanda\n3. Samoa\n4. Fiyi\n5. Tonga\n00. Volver"));
                switch(menu) {
                    case 1:
                    mostrarInformacionDePais(australia);
                    break;
                    case 2:
                    mostrarInformacionDePais(nuevaZelanda);
                    break;
                    case 3:
                    mostrarInformacionDePais(samoa);
                    break;
                    case 4:
                    mostrarInformacionDePais(fiyi);
                    break;
                    case 5:
                    mostrarInformacionDePais(tonga);
                    break;
                    case 00:
                        break;
                    default:
                        alert("Vuelva a intentar");
                        break;
                }
                
            } while(menu != 00);
            break;
            case 0:
            break;
            default:
            alert("La opción ingresada no es valida, vuelva a intentar");
            break;
        }
    } while(mainMenu !== 0)
} else {
    alert("Vuelva pronto");
}