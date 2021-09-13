import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sa-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  items!: { name: string, price: number }[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        name: 'Item 1',
        price: 123.30
      },
      {
        name: 'Item 2',
        price: 17.00
      },
      {
        name: 'Item 3',
        price: 98.45
      },
      {
        name: 'Item 4',
        price: 45.67
      }
    ];
  }
}
