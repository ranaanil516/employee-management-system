import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userExpr'
})
export class UserExprPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}  Years Experience`;
  }

}
