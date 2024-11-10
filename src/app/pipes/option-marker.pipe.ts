import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionMarker',
  standalone: true
})
export class OptionMarkerPipe implements PipeTransform {

  readonly alphabet = 'abcdefghijklmnopqrstuvwxyz';

  transform(index: number): unknown {
    return index >= this.alphabet.length ? `${index}` : this.alphabet.at(index);
  }

}
