import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemName: string;

  @Output() evtAdd: EventEmitter<string>;

  constructor() {
    this.evtAdd = new EventEmitter();
   }

  ngOnInit(): void {
  }

  btnAdd() {
    this.evtAdd.emit(this.itemName);
    this.itemName = '';
  }

}
