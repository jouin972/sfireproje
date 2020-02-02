import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'resizeText' })
export class ResizeTextPipe implements PipeTransform {
  transform(string: string, resizeTo: number = 45): string {
    if (string.length > resizeTo) {
      return `${string.substring(0, resizeTo)} ...`;
    } else {
      return string;
    }
  }
}
