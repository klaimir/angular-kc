import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;

  constructor() { }

  ngOnInit(): void {
    this.nombre = 'Honorio';
  }

  borrar(event) {
    event.preventDefault();
    this.nombre = '';
  }

}
