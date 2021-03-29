import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  taskList: string [];

  constructor() { }

  ngOnInit(): void {
    this.taskList = [];
  }

  addTareas(itemName: string) {
    console.log('addTareas', itemName);
    this.taskList.push(itemName);
  }

  deleteTask(position: number) {
    // INFO: Pasamos la posición porque al calcularla podría eliminar érroneamente elementos repetidos
    this.taskList.splice(position, 1);
  }

}
