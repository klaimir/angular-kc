import { Component } from '@angular/core';

@Component({
  selector: 'kc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kc';
  version: number = 11;

  logoPath: string = '../assets/logo.png';
}
