import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @Input() titulo:any;
    
  constructor() { }

  ngOnInit(): void {
  }

  en_contruccion(){
    Swal.fire({
        title: 'En construccion.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("assets/img/bunny.gif")
          left top
          no-repeat
        `
      })
  }
}
