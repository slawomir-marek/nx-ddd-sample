import { Component } from '@angular/core';
import { LoggerService } from '@sa/shared';

@Component({
  selector: 'sample-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop';

  constructor(service: LoggerService) {}
}
