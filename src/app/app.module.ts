import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

// Registramos datos locales en español para traducción de pipes
// Esta es la forma de Angular 7, en Angular 11 hay un importador automático explicado en 18n - guides
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InicioModule } from './inicio/inicio.module';
import { TareasModule } from './tareas/tareas.module';
import { ContactosModule } from './contactos/contactos.module';
import { LibrosModule } from './libros/libros.module';
import { AboutModule } from './about/about.module';
import { FormsModule } from '@angular/forms';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    TareasModule,
    ContactosModule,
    LibrosModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
