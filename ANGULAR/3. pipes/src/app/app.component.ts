import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Fernando";
  nombre2:string = "carlos francisco alatoRRe parra";

  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI = Math.PI;

  a:number = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'primera',
      cada: '19'
    }
  }

  valorDePromesa = new Promise( (resolve, reject ) => {
    setTimeout ( () => resolve ('Llego la data!'), 3500);
  })

  fecha = new Date('2017-01-10');

  video:string = 'nlt5Wa13fFU';

  activar:boolean = true;

}
