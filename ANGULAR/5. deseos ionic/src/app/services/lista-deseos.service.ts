/**
 * Created by Toshiba on 15/04/2017.
 */
import {Injectable} from '@angular/core';
import { Lista } from './../clases/listas';


@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    let lista1 = new Lista('Compras de supermercado');
    let lista2 = new Lista('Juegos que deseo');
    let lista3 = new Lista('Cosas de la universidad');

    this.listas.push( lista1 );
    this.listas.push( lista2 );
    this.listas.push( lista3 );

  console.log('Lista deseos')

  }
}
