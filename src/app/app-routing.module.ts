import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactosComponent } from './contactos/contactos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'tareas', component: TareasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
