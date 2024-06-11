// Definir la clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

// Definir la clase hija Automovil que hereda de Vehiculo
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año); // Llama al constructor de la clase base
        this.color = color;
        this.precio = precio;
    }

    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: $${this.precio}`;
    }
}

// Crear una instancia de la clase Vehiculo
let miVehiculo = new Vehiculo("Toyota", "Corolla", 2020);
console.log(miVehiculo.obtenerInformacion());

// Crear una instancia de la clase Automovil
let miAutomovil = new Automovil("Tesla", "Model 3", 2021, "Rojo", 50000);
console.log(miAutomovil.obtenerInformacion());