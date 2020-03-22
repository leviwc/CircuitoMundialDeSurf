import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Surfista} from '../../models/surfista';
@Component({
  selector: 'app-add-surfista',
  templateUrl: './add-surfista.component.html',
  styleUrls: ['./add-surfista.component.css']
})
export class AddSurfistaComponent implements OnInit {
  @Input() surfistas:Surfista[];
  @Output() addSurfista: EventEmitter<string>=new EventEmitter();
  constructor() {}

  ngOnInit() {
  }
  
  onSurfista(nome:string){
    this.addSurfista.emit(nome);
  }
}
