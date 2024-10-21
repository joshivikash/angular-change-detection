import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-logging',
  template: `
    <div *ngFor="let log of (loggingService.logs$ | async)">
      {{ log }}
    </div>
  `
})
export class LoggingComponent implements OnInit {
  constructor(public loggingService: LoggingService) {}

  ngOnInit() {}
}
