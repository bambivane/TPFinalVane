import { Auto } from "./dist/Vehicle/Auto.js";
import { Moto } from "./dist/Vehicle/Moto.js";
const autos = new Auto("Ford", "Focus", 200, 5);
const motos = new Moto("Yamaha", "R1", 320, "Curvo");
const vehiculos = [autos, motos];

function procesoVehiculos(vehiculos) {
    for (const vehiculo of vehiculos) {
        //te imprime la velocidad que pusiste 130 auto 200 moto
        //pide un número como parametro
        console.log(vehiculo.acelerar(autos.velocidadMaxima));
        //tenes que pasarle un texto por la condición que pusiste
        //dice auto esta frenado y moto esta frenada
        console.log(vehiculo.frenar("freno"));
    }
}
procesoVehiculos(vehiculos);
