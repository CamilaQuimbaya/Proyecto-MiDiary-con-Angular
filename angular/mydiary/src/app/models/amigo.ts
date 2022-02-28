export class Amigo{
    _id?: any;
    nombre: string;
    correo: string;
    telefono: string;

    constructor(nombreAmigo: string, correoAmigo: string, telefonoAmigo: string){
        this.nombre = nombreAmigo;
        this.correo = correoAmigo;
        this.telefono = telefonoAmigo;
    }
}
