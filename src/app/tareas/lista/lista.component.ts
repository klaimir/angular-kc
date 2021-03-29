import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() taskList: string[];
  @Output() evtDelete: EventEmitter<number>;

  filter: string;

  // INFO: Si creamos un getter que tenga las tareas mapeadas en todo momento, angular intenta calcularlo todo el rato y renderizarlo,
  // ya que, está escuchando cambios en taskList al ser un parámetro de entrada. Por tanto, es mejor tener un método de mapeo que se aplique
  // una única vez después del filtrado de tareas.
  _mappingTask(taskList: string[]): any[] {
    return taskList.map((task, index) => {
      return {
        index: index,
        taskName: task,
      };
    });
  }

  get filteredTaskList(): any[] {
    if (this.filter) {
      return this._mappingTask(
        this.taskList.filter((task) => {
          return task.includes(this.filter);
        })
      );
    } else {
      return this._mappingTask(this.taskList);
    }
  }

  constructor() {
    this.evtDelete = new EventEmitter();
  }

  ngOnInit(): void {}

  btnDelete(position: number) {
    this.evtDelete.emit(position);
  }
}
