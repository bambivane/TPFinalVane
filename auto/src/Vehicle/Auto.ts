import { Vehiculo } from "./Vehiculo";
import { IVehiculo } from "../Interface/IVehiculo";

export class Auto extends Vehiculo implements IVehiculo {
    private _puertas: number;

    constructor(marca: string, modelo: string, velocidadMaxima: number, puertas: number){
        super(marca,modelo,velocidadMaxima);
        this._puertas = puertas;
    }

    //faltan los guetter y setters
    public get puertas(): number {
		return this._puertas;
	}

	public set puertas(puertas: number) {
		this._puertas = puertas;
	}
    
    acelerar (speed: number) {
        return 130;
    }

    frenar (stop: string) {
        return 'El auto está frenado'
    }
}
