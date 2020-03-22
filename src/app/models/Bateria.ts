import {Onda} from './onda';
import { Surfista } from './surfista';

export class Bateria{
    id:number;
    surfista1:Surfista;
    surfista2:Surfista;
    vencedor: Surfista;
    ondas:Onda[];
}