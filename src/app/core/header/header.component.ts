import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  logoPath: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'angular-kc';
    this.logoPath = '../../assets/logo.png';
  }

}
