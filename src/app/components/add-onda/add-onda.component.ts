import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-onda',
  templateUrl: './add-onda.component.html',
  styleUrls: ['./add-onda.component.css']
})
export class AddOndaComponent implements OnInit {
  @Output() addOnda: EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onOnda(prop){
    this.addOnda.emit(prop);
  }
}
