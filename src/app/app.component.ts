import { Component, HostListener } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Planeswalkers';

  constructor(private logService: LogService) {}

  popMessage() {
    this.logService.popMessage();
  }

  getLogMessages() {
    return this.logService.getMessages();
  }
}
