import { Vehiculo } from "./Vehiculo.js";
export class Auto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, puertas) {
        super(marca, modelo, velocidadMaxima);
        this._puertas = puertas;
    }
    //faltan los guetter y setters
    get puertas() {
        return this._puertas;
    }
    set puertas(puertas) {
        this._puertas = puertas;
    }
    acelerar(speed) {
        return 130;
    }
    frenar(stop) {
        return 'El auto está frenado';
    }
}
