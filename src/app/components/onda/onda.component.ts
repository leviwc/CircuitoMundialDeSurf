import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Onda } from 'app/models/Onda';
import { Nota } from 'app/models/Nota';

@Component({
  selector: 'app-onda',
  templateUrl: './onda.component.html',
  styleUrls: ['./onda.component.css']
})
export class OndaComponent implements OnInit {
  @Input() onda: Onda;
  nota:number;
  @Output() notaFinal: EventEmitter<{nota:any,onda:number}>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onFinal(prop){
    if(prop.nota1==undefined || prop.nota2==undefined || prop.nota3==undefined)
      return;
    this.notaFinal.emit({nota:prop,onda:this.onda.id});
  }
}
