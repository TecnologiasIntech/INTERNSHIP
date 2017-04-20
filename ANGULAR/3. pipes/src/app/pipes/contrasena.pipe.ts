import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, activate:boolean): string {

    if(activate){
      return value;
    }else{
      return '******';
    }
  }

}
