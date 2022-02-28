import { Component, OnInit } from '@angular/core';
import { Amigo } from 'src/app/models/amigo';
import { AmigosService } from 'src/app/services/amigos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-amigos',
  templateUrl: './lista-amigos.component.html',
  styleUrls: ['./lista-amigos.component.css']
})
export class ListaAmigosComponent implements OnInit {
    listaAmigos: Amigo[] = [];
  constructor(private _amigoService: AmigosService) { }

ngOnInit(): void {
      this.obtenerAmigos();
  }

obtenerAmigos(){
      this._amigoService.getAmigos().subscribe(data => {
          console.log(data)
          this.listaAmigos = data;
      }, error => {
          console.log(error)
      })
}
eliminarAmigo(id: string){
    Swal.fire({
        title: 'En serio quieres eliminarlo :(?',
        text:"Esta accion no se podra deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, eliminar'
    }).then((result) => {
        if(result.isConfirmed){
            this._amigoService.deleteAmigo(id).subscribe(data => {
                Swal.fire(
                    'Borrado!',
                    'tu Daily se ha borrado exitosamente',
                    'success'
                )
                this.obtenerAmigos()
            }, error =>{
                console.log(error);
            })

        }
    })
}
}
