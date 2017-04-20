/**
 * Created by Toshiba on 04/04/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})


export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean = true ): string {

    value = value.toLowerCase();

    let nombres = value.split(' ');

    if(todas) {
      for (let i in nombres) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
      }
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ')
  }
}

// export class CapitalizadoPipe implements PipeTransform {
//     transform(value: string, arg1, arg2, arg3): string {
//
//         console.log(value);
//         console.log(arg1);
//         console.log(arg2);
//         console.log(arg3);
//
//       return "hola mundo!";
//     }
// }
