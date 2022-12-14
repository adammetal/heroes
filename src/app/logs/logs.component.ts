import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  constructor(private logService: LogService) {}

  popMessage() {
    this.logService.popMessage();
  }

  getLogMessages() {
    return this.logService.getMessages();
  }

  ngOnInit(): void {}
}
