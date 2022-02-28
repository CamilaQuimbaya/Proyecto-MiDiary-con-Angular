// import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Daily } from 'src/app/models/daily';
import { DailyService } from 'src/app/services/daily.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-daily',
  templateUrl: './registro-daily.component.html',
  styleUrls: ['./registro-daily.component.css']
})
export class RegistroDailyComponent implements OnInit {

    dailyForm: FormGroup;
    titulo_formulario = 'añadir daily';
    id: string | null;


    constructor(private fb: FormBuilder, private dailyService: DailyService, private router: Router, private idDailyPath: ActivatedRoute ) {
        this.dailyForm = this.fb.group({
            titulo: ['', Validators.required],
            descripcion: ['', Validators.required],
            nota: ['', Validators.required]
        });

        this.id = this.idDailyPath.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
        this.accionSolicitada()
    }

    infoDaily(){
        const data_daily_form: Daily = {
            fecha: this.dailyForm.get('fecha')?.value,
            titulo:this.dailyForm.get('titulo')?.value,
            descripcion:this.dailyForm.get('descripcion')?.value,
            nota:this.dailyForm.get('nota')?.value,
        }
        console.log(data_daily_form)
        if (this.id !== null){
            this.dailyService.putDaily(this.id, data_daily_form).subscribe(data => {
                this.router.navigate(['/daily'])

                Swal.fire({
                    icon: 'success',
                    title:'Genial!',
                    text: 'Daily actualizado exitosamente'
                })
            },error => {
                Swal.fire({
                    icon: 'error',
                    title:'Algo esta pasando',
                    text: 'Comunicate con el Administrador'
                })
            })
        }else{
            this.dailyService.postDailies(data_daily_form).subscribe(data => {
                this.router.navigate(['/daily'])

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
            this.titulo_formulario = "Editar producto";
            this.dailyService.getDaily(this.id).subscribe(data => {
                this.dailyForm.setValue({
                    titulo: data.titulo,
                    descripcion: data.descripcion,
                    nota: data.nota
                })
            }, error => {
                console.log(error)
            })
        }
    }
}
