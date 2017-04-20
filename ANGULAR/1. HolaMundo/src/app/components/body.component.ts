/**
 * Created by Toshiba on 04/03/2017.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-body',
    templateUrl: 'body.component.html'
})
export class BodyComponent  {
  mostrar:boolean = true;
  texto:string = "Un gran poder, reqiuere una gran responsabilidad.";
  autor:string = "Ben Parker";

  personajes:string[] = [
    "Spiderman", "Venom", "Dr. Octopus"
  ]

}
