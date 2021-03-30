import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  taskList: string [];
  errorMessage: string;
  succesMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.taskList = [];
  }

  addTareas(itemName: string) {
    console.log('addTareas', itemName);
    this.errorMessage = '';
    if(itemName) {
      this.taskList.push(itemName);
      this.succesMessage = 'Tarea insertada con éxito';
      setTimeout(() => {
        this.succesMessage = '';
      }, 1500);
    } else {
      this.errorMessage = 'Debe indicar un título para la tarea';
    }
  }

  deleteTask(position: number) {
    // INFO: Pasamos la posición porque al calcularla podría eliminar érroneamente elementos repetidos
    this.taskList.splice(position, 1);
    this.succesMessage = 'Tarea eliminada con éxito';
    setTimeout(() => {
      this.succesMessage = '';
    }, 1500);
  }

  // TODO: Probar a pasar la lógica de filtrado aquí

}
