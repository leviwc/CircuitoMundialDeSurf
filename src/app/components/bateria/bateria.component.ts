import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Bateria} from '../../models/Bateria';
import {Surfista} from '../../models/Surfista';
@Component({
  selector: 'app-bateria',
  templateUrl: './bateria.component.html',
  styleUrls: ['./bateria.component.css']
})
export class BateriaComponent implements OnInit {
  @Input() bateria: Bateria;
  @Output() addOnda2: EventEmitter<{surfista:string,id:number}>=new EventEmitter();
  @Output() decideVencedor: EventEmitter<{surfista:Surfista,id:number}>=new EventEmitter();
  @Output() notaAtt: EventEmitter<any>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  addOnda(prop){
    if((prop.surfista==this.bateria.surfista1.nome && prop.numero==this.bateria.surfista1.numero) || (prop.surfista==this.bateria.surfista2.nome && prop.numero==this.bateria.surfista2.numero))
      this.addOnda2.emit({surfista:prop,id:this.bateria.id});
  }
  vencedor(){
    let surfista1=this.bateria.surfista1;
    let surfista2=this.bateria.surfista2;
    let surfista1Nota1=0;
    let surfista1Nota2=0;
    let surfista2Nota1=0;
    let surfista2Nota2=0;
    let ondas=this.bateria.ondas;
    for(let i=0; i<this.bateria.ondas.length;i++){
      let nota=(ondas[i].nota.nota1+ondas[i].nota.nota2+ondas[i].nota.nota3)/3;

      if(ondas[i].surfista.numero==surfista1.numero){
        if(nota>surfista1Nota1){
          if(surfista1Nota1>surfista1Nota2){
            surfista1Nota2=surfista1Nota1;
          }
          surfista1Nota1=nota;
        }else if(nota>surfista1Nota2){
          surfista1Nota2=nota;
        }
      }else{
        if(nota>surfista2Nota1){
          if(surfista2Nota1>surfista2Nota2){
            surfista2Nota2=surfista2Nota1;
          }
          surfista2Nota1=nota;
        }else if(nota>surfista2Nota2){
          surfista2Nota2=nota;
        }
      }

    }
    if(surfista1Nota1+surfista1Nota2>surfista2Nota1+surfista2Nota2)
      this.decideVencedor.emit({surfista:surfista1,id:this.bateria.id});
    else
      this.decideVencedor.emit({surfista:surfista2,id:this.bateria.id});
  }
  notaFinal(prop){
    this.notaAtt.emit({prop:prop,bateria:this.bateria.id});
  }
}
