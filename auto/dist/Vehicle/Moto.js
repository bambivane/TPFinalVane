import { Vehiculo } from "./Vehiculo.js";
//acá saque la implementación porque como hereda de vehiculo que ya tiene la implementación cargada viene por herencia
//si lo pones estarías haciendo dos veces lo mismo
export class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, manillar) {
        super(marca, modelo, velocidadMaxima);
        this._manillar = manillar;
    }
    //faltan los guetter y setters
    get manillar() {
        return this._manillar;
    }
    set manillar(manillar) {
        this._manillar = manillar;
    }
    acelerar(speed) {
        return 200;
    }
    frenar(stop) {
        return 'La moto está frenada';
    }
}
