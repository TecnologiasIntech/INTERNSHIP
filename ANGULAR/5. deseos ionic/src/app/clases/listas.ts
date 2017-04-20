/**
 * Created by Toshiba on 15/04/2017.
 */
import { ListaItem } from './lista-item'

export class Lista{
  nombre:string;
  terminada:boolean;
  items:ListaItem[]; 

  constructor( nombre:string ){

    this.nombre = nombre;
    this.terminada = false;

  }

}
