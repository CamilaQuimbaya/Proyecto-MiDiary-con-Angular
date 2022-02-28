export class Usuario{
    _id?: any
    email: string;
    pass: string;

    constructor(emailUser:string, passUser: string){
        this.email = emailUser;
        this.pass = passUser;
    }
}
