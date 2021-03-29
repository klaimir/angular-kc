import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() taskList: string [];
  @Output() evtDelete: EventEmitter<string>;

  constructor() {
    this.evtDelete = new EventEmitter();
   }

  ngOnInit(): void {
  }

  btnDelete(task: string) {
    this.evtDelete.emit(task);
  }
}
