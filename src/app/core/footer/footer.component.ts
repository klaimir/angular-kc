import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;
  empresa: string;
  lugar: string;
  fecha: Date;

  constructor() { }

  ngOnInit(): void {
    this.autor = 'angel berasuain';
    this.empresa = 'freelance';
    this.lugar = 'almería';
    setInterval(() => {
      this.fecha = new Date();
    }, 1000);
  }

}
