import { Component } from '@angular/core';
import {BateriasService} from './services/baterias.service';

import {Bateria} from "./models/Bateria";
import {Surfista} from "./models/Surfista";
import {Onda} from "./models/Onda";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BateriasService]
})
export class AppComponent {
  baterias: Bateria[];
  surfistas: Surfista[];

  constructor(private bateriasService:BateriasService){
    this.surfistas=new Array<Surfista>();
    this.baterias=new Array<Bateria>();
  }

  
  ngOnInit(){
    this.baterias=this.bateriasService.getBaterias();
  }
  addSurfista(sur){
    this.surfistas.push({
      numero:this.surfistas.length,
      nome:sur.nome,
      pais:sur.pais
    })
  }
  pegarSurfista(numero){
    return this.surfistas[numero];
  }
  addBateria(prop){
    var surfista1: Surfista;
    var surfista2: Surfista;
    surfista1=this.pegarSurfista(prop.numero1);
    surfista2=this.pegarSurfista(prop.numero2);
    if(surfista1==undefined)
      return;
    if(surfista2==undefined)
      return;
    this.baterias.push({
      id:this.baterias.length,
      surfista1:surfista1,
      surfista2:surfista2,
      vencedor: {
        numero:-1,
        nome:"X",
        pais:"X"
      },
      ondas: []
    })
  }
  addOnda(prop){
    var surfista: Surfista;
    surfista=this.pegarSurfista(prop.surfista.numero);
    this.baterias[prop.id].ondas.push({
      id:this.baterias[prop.id].ondas.length,
      surfista:surfista,
      nota:{
        id:0,
        nota1:0,
        nota2:0,
        nota3:0
      }
    })
  }
  vencedor(prop){
    this.baterias[prop.id].vencedor=prop.surfista;
  }
  notaAtt(prop){
    this.baterias[prop.bateria].ondas[prop.prop.onda].nota=prop.prop.nota;
  }
}
