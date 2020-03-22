import { Component, OnInit,Input } from '@angular/core';
import { Surfista } from 'app/models/Surfista';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  @Input() surfista:Surfista;
  constructor() { }

  ngOnInit() {
  }

}
