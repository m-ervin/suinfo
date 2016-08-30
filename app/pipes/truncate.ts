// truncate.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class truncatePipe implements PipeTransform {
  transform(text: string, limit: number):string {
      if(text.length>limit)
            text=text.substring(0,limit)+"...";
    return text;
  }
}