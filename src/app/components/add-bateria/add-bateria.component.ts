import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-bateria',
  templateUrl: './add-bateria.component.html',
  styleUrls: ['./add-bateria.component.css']
})
export class AddBateriaComponent implements OnInit {
  @Output() addBateria: EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onBateria(nome){
    this.addBateria.emit(nome);
  }
}
