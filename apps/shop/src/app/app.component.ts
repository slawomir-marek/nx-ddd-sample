import { Component } from '@angular/core';
import { LoggerService } from '@sa/shared';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop';

  constructor(private service: LoggerService) {
    this.service.log('App component');
  }
}
