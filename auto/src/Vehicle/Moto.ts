import { Vehiculo } from "./Vehiculo";
import { IVehiculo } from "../Interface/IVehiculo";

//acá saque la implementación porque como hereda de vehiculo que ya tiene la implementación cargada viene por herencia
//si lo pones estarías haciendo dos veces lo mismo
export class Moto extends Vehiculo{
    private _manillar: string;

    constructor(marca: string, modelo: string, velocidadMaxima: number, manillar: string){
        super(marca,modelo,velocidadMaxima);
        this._manillar = manillar;
    } 
    //faltan los guetter y setters
    public get manillar(): string {
		return this._manillar;
	}

	public set manillar(manillar: string) {
		this._manillar = manillar;
	}
    acelerar(speed: number) {
        return 200;
    }

    frenar (stop: string) {
        return 'La moto está frenada';
    }
}