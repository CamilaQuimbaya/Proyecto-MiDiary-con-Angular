
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Amigo } from 'src/app/models/amigo';
import { AmigosService } from 'src/app/services/amigos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-amigos',
  templateUrl: './registro-amigos.component.html',
  styleUrls: ['./registro-amigos.component.css']
})
export class RegistroAmigosComponent implements OnInit {

    amigoForm: FormGroup;
    titulo_formulario = 'añadir amigo';
    id: string | null;
    telefono = /^([0-9])*$/;
    validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private fb: FormBuilder, private amigoService: AmigosService, private router: Router, private idAmigoPath: ActivatedRoute) {
        this.amigoForm = this.fb.group({
            nombre: ['', Validators.required],
            correo: ['', [Validators.required, Validators.pattern(this.validacionEmail)]],
            telefono: ['', [Validators.required, Validators.pattern(this.telefono)]],
        })
        this.id = this.idAmigoPath.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.accionSolicitada()
  }

  infoAmigo(){
      console.log(this.amigoForm)

      const data_amigo: Amigo ={
          nombre:this.amigoForm.get('nombre')?.value,
          correo:this.amigoForm.get('correo')?.value,
        telefono:this.amigoForm.get('telefono')?.value
        }

        console.log(data_amigo)
        if (this.id !== null){
            this.amigoService.putAmigo(this.id, data_amigo).subscribe(data => {
                this.router.navigate(['/amigos'])

                Swal.fire({
                    icon: 'success',
                    title:'Genial!',
                    text: 'amigo actualizado exitosamente'
                })
            },error => {
                Swal.fire({
                    icon: 'error',
                    title:'Algo esta pasando',
                    text: 'Comunicate con el Administrador'
                })
            })
        }else{
            this.amigoService.postAmigos(data_amigo).subscribe(data => {
                this.router.navigate(['/amigos'])

                Swal.fire({
                    icon: 'success',
                    title:'Genial!',
                    text: 'Daily creado exitosamente'
                })
            }, error => {
                Swal.fire({
                    icon: 'error',
                    title:'Algo esta pasando',
                    text: 'Comunicate con el Administrador'
                })
            })
        }
  }
  accionSolicitada(){
    if (this.id !== null){
        //cuando el usuario actualiza
        this.titulo_formulario = "Editar amigo";
        this.amigoService.getAmigo(this.id).subscribe(data => {
            this.amigoForm.setValue({
                nombre: data.nombre,
                correo: data.correo,
                telefono: data.telefono
            })
        }, error => {
            console.log(error)
        })
    }
}
}
