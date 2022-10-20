export class Pregunta {
    private _consigna : string;
    private _opciones : Array<string>;
    private _opcionCorrecta : number;
    private _puntaje: number;
constructor (p_consigna:string, p_opciones:Array<string>,p_opcionCorrecta:number,p_puntaje:number) {
    this._consigna = p_consigna;
    this._opciones = p_opciones;
    this._opcionCorrecta = p_opcionCorrecta;
    this._puntaje = p_puntaje;
}
 public pregunta(p_consigna:string, p_puntaje:number){

 }
 public addOpcion(p_opciones:string){
    this._opciones.push(p_opciones);
 }
public setOpcionCorrecta(p_opcionCorrecta:number){
    this._opcionCorrecta=p_opcionCorrecta;
}
public esCorrecta(p_respuesta:number):boolean{
    return false
}
public getPuntaje():number{
    return this._puntaje;
}
}