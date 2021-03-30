import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() taskList: any[];
  @Output() evtDelete: EventEmitter<number>;

  btnDelete(position: number) {
    this.evtDelete.emit(position);
  }

  constructor() {
    this.evtDelete = new EventEmitter();
  }

  ngOnInit(): void {}
}
