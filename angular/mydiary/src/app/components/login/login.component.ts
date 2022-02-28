import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/user';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    constructor(private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            user: ['',[Validators.required, Validators.pattern(this.validacionEmail)]],
            pass: ['', Validators.required]

})
    }

    ngOnInit(): void {
    }
    accessoUsuario(){
        const data_usuario: Usuario = {
            email: this.loginForm.get('user')?.value,
            pass: this.loginForm.get('pass')?.value
        }
        this.router.navigate(['/dashboard']);

        Swal.fire({
            title: 'Holii de nuevo!',
            width: 500,
            padding: '3em',
            color: '#716add',
            background:`#fff
            no-repeat
            right`,
            backdrop: `
                rgba(0,0,123,0.4)
                url(" assets/img/kawaii.gif")
                left top
                no-repeat
                `
        })
    }

}
