import { Auto } from "./Vehicle/Auto.js";
import { Moto } from "./Vehicle/Moto.js";
import { Vehiculo } from "./Vehicle/Vehiculo.js";

const autos = new Auto("Ford","Focus",200,5);
const motos = new Moto("Yamaha","R1",320,"Curvo");
const vehiculos: Vehiculo[] = [autos,motos];

function procesoVehiculos (vehiculos: Vehiculo[]): void {
    for (const vehiculo of vehiculos) {
        vehiculo.acelerar(autos.velocidadMaxima);
        vehiculo.frenar("freno");
    }
}

procesoVehiculos(vehiculos);