import { Component, OnInit } from '@angular/core';
import { Daily } from 'src/app/models/daily';
import { DailyService } from 'src/app/services/daily.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-daily',
    templateUrl: './daily.component.html',
    styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

    listaDailies: Daily[] = []

    constructor(private _dailyService: DailyService) { }

    ngOnInit(): void {
        this.obtenerDailies()
    }

    obtenerDailies(){
        this._dailyService.getDailies().subscribe(data => {
            console.log(data);
            this.listaDailies = data
        }, error => {
            console.log(error);
        })
    }
    eliminarDaily(id: string){
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
                this._dailyService.deleteDaily(id).subscribe(data => {
                    Swal.fire(
                        'Borrado!',
                        'tu Daily se ha borrado exitosamente',
                        'success'
                    )
                    this.obtenerDailies()
                }, error =>{
                    console.log(error);
                })

            }
        })
    }
}
