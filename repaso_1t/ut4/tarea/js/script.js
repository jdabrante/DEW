class Manzana {
    constructor() {
        this.edificios = {}
    }
}

let manzana = new Manzana();

class Edificio {
    constructor(calle, numero, codigo) {
        this.calle = calle
        this.numero = numero
        this.codigo = codigo
        this.plantas = []
        console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigo}`)
    }
    modificarNumero(numero) {
        this.numero = numero
    }
    modificarCalle(calle) {
        this.calle = calle
    }
    modificarCodigoPostal(codigo) {
        this.codigo = codigo
    }
    imprimirCalle() {
        return this.calle
    }
    imprimirNumero() {
        return this.numero
    }
    imprimirCodigoPostal() {
        return this.postal
    }

    agregarPlantasYPuertas(numplantas, puertas) {
        for (let i = 0; i < numplantas; i++){
            this.plantas.push(new Planta(puertas))
        }
    }

    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta].puertas[puerta] = nombre
        console.log(`${nombre} es ahora propietario de la puerta ${puerta} de la planta ${planta}`)
    }

    imprimirPlantas() {
        this.plantas.forEach((planta, numero) => {
            console.log(`Planta ${numero}`);
            planta.puertas.forEach((puerta, numero) => {
                console.log(`${numero}: ${puerta}`)
            });
        });
    }
}




class Planta {
    constructor(puertas) {
        this.puertas = new Array(puertas)
    }
}
