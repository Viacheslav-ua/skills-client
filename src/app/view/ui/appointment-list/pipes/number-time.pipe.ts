import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'appNumberToTime',
  pure: true,
})
export class NumberToTimePipe implements PipeTransform {
  transform(value: number): string {
    if(value < 1 || value > 24) return ''
    if (value <= 12) {
      return `${value}:00 AM`
    }
    return `${value - 12}:00 PM`
  }

}
