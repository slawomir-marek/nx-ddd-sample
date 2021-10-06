import { Injectable } from '@angular/core';
import { CartItem } from './../models';

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  calculate(items: CartItem[]): void {
    console.log('PricingService: calculate for ' + items?.length);
  }
}
