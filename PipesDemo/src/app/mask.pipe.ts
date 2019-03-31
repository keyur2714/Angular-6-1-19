import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: any, maskChar?: string, numberOfMaskChar?: number): any {
    if(maskChar === undefined)
      maskChar = '*';
    if(numberOfMaskChar === undefined)  
      numberOfMaskChar = 4;
    let mascAccNo = value.substring(0,value.length - numberOfMaskChar);
    for(let i=1;i<=numberOfMaskChar;i++){
      mascAccNo = mascAccNo + maskChar;
    }  
    return mascAccNo;
  }

}
