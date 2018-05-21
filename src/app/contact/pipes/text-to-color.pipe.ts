import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {
  defaultColor = '#263238';
  colors = {
    'a': '#EF5350',
  'b': '#EC407A',
  'c': '#AB47BC',
  'd': '#673AB7',
  'e': '#3F51B5',
  'f': '#2196F3',
  'g': '#795548',
  'h': '#FF5722',
  'i': '#E65100',
  'j': '#FFC107',
  'k': '#FFEB3B',
  'l': '#00E676',
  'm': '#EEFF41',
  'n': '#76FF03',
  'o': '#66BB6A',
  'p': '#006064',
  'q': '#0288D1',
  'r': '#6200EA',
  's': '#304FFE',
  't': '#1976D2',
  'u': '#D500F9',
  'v': '#FF1744',
  'w': '#880E4F',
  'x': '#CDDC39',
  'y': '#827717',
  'z': '#607D8B'


};
  transform(value: any, args?: any): any {
    if (value == null || value === '') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }
}
