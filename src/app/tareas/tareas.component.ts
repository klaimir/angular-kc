import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  filter: string;
  filteredTaskList: any[];

  errorMessage: string;
  succesMessage: string;

  taskList: string [];

  constructor() { }

  ngOnInit(): void {
    this.taskList = [];
    this.filteredTaskList = [];
    this.filter = '';
  }

  addTareas(itemName: string) {
    console.log('addTareas', itemName);
    this.errorMessage = '';
    if(itemName) {
      this.taskList.push(itemName);
      this.filterTaskList();
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
    this.filterTaskList();
    this.succesMessage = 'Tarea eliminada con éxito';
    setTimeout(() => {
      this.succesMessage = '';
    }, 1500);
  }

  get taskListMapped(): any[] {
    return this.taskList.map((task, index) => {
      return {
        index: index,
        taskName: task,
      };
    });
  }

  filterTaskList() {
    if (this.filter) {
      this.filteredTaskList = this.taskListMapped.filter((task) => {
          return task.taskName.includes(this.filter);
        })
    } else {
      this.filteredTaskList = this.taskListMapped;
    }
  }

}
