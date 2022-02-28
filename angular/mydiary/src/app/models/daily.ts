export class Daily{
    _id?: any;
    fecha: Date;
    titulo: string;
    descripcion: string;
    nota: string;

    constructor(fecha:Date, titulo: string, descripcion: string, nota: string){
        this.fecha = fecha;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.nota = nota;
    }
}
