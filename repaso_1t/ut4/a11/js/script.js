class Consecionario {
    constructor() {
        this.coches = {}
    }

    agregar(matricula, coche) {
        this.coches[matricula] = coche
    }

    eliminar(matricula) {
        delete this.coches[matricula];
    }

    mostrar() {
        let result = ""
        Object.keys(this.coches).forEach(coche => {
            console.log(`${this.coches[coche].matricula} | ${this.coches[coche].modelo} | ${this.coches[coche].color} | ${this.coches[coche].ano}`)
            result += `${this.coches[coche].matricula} | ${this.coches[coche].modelo} | ${this.coches[coche].color} | ${this.coches[coche].ano}<br>`      
        });
        return result
    }
}

class Coche {
    constructor(modelo, color, matricula, ano) {
        this.modelo = modelo;
        this.color = color;
        this.matricula = matricula;
        this.ano = ano;
    }
}

let consesionario = new Consecionario();

function crearCoche() {
    let matricula = document.getElementById("matricula").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    let ano = document.getElementById("ano").value;
    coche = new Coche(modelo, color, matricula, ano)
    consesionario.agregar(coche.matricula, coche)
}

function eliminarCoche() {
    let matricula = document.getElementById("eliminar").value;
    consesionario.eliminar(matricula)
}

function mostrarCoches() {
    document.getElementById("coches").innerHTML = consesionario.mostrar()
}