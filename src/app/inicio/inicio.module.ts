import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { SaludoComponent } from './saludo/saludo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InicioComponent, SaludoComponent],
  imports: [
    CommonModule,
    FormsModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
