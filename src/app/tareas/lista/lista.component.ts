import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() taskList: string [];
  @Output() evtDelete: EventEmitter<number>;

  filter: string;

  get filteredTaskList(): string [] {
    if(this.filter) {
      return this.taskList.filter((task) => {
        return task.includes(this.filter);
      });
    } else {
      return this.taskList;
    }

  }

  constructor() {
    this.evtDelete = new EventEmitter();
   }

  ngOnInit(): void {
  }

  btnDelete(position: number) {
    this.evtDelete.emit(position);
  }
}
