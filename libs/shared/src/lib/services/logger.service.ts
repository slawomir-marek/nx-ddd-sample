import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  log(message: string, severity: number = 1): void {
    switch(severity) {
      case 1: console.log(message);
        break;
      case 2: console.warn(message);
        break;
      case 3: console.error(message);
        break;
      default: console.log(message);
    }
  }
}
