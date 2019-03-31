import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 'Distinction'){
      value = 'D';
    }else if(value === 'First'){
      value = 'F'
    }else if(value === 'Second'){
      value = 'S';
    }else if(value === 'Pass'){
      value = 'P';
    }else{
      value = 'FAIL';
    }
    return value;
  }

}
