import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private logs = [];
  private logsBS = new BehaviorSubject(this.logs);
  logs$ = this.logsBS.asObservable();

  count = 1;

  constructor() {}

  add(component: string) {
    this.logs = [this.count.toLocaleString() + '. ' + component, ...this.logs];
    this.logsBS.next(this.logs);
    this.count++;
  }
}
