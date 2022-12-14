import { RendicionDeExamen } from './class_RendicionDeExamen'
import { Examen } from './class_Examen'


export class Alumno {
    private _examenesRendidos: RendicionDeExamen[];
    private _nombre: string;
    private _DNI: number;
    
    constructor(p_ExamenesRendidos: RendicionDeExamen[],p_nombre: string,p_DNI: number) {
        this._examenesRendidos = p_ExamenesRendidos;
        this._nombre = p_nombre;
        this._DNI = p_DNI;

    }
    public setAlumno(p_nombre:string,p_DNI:number){
        this._nombre=p_nombre;
        this._DNI=p_DNI;
    }
    public getNombre():string{
        return this._nombre;
    }
    public getDNI():number{
        return this._DNI;
    }
    public rendirExamen(p_examen:Examen,p_respuestas:Array<number>):boolean{
        let aux: boolean = false;
        for(let i: number = 0; i< this._examenesRendidos.length; i++){
            if(p_examen === this._examenesRendidos[i].getExamen()){
            this._examenesRendidos[i].rendicionDeExamen(p_examen, p_respuestas);
            console.log(`El alumno ${this._nombre} ya rindió el examen`);
                aux = true;
            } else {
                console.log(`El alumno ${this._nombre} no rindió el examen`);
                aux = false;
            }
        }
        return aux;
    }
}