import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-parent',
  styles: [
    `
      :host {
        display: block;
        color: white;
        border: white dashed 4px;
        margin: 10px;
        padding: 10px;
      }
      :host ::ng-deep p {
        margin: 5px;
      }
      :host ::ng-deep button {
        margin: 2px;
      }
    `,
  ],
  template: `
    <p>Parent - {{ data | json }}</p>
    <button mat-raised-button color="primary" (click)="changeMutably()">
      Change Mutably
    </button>

    <button mat-raised-button color="primary" (click)="changeImmutably()">
      Change Immutably
    </button>
    <button
      mat-raised-button
      color="primary"
      (click)="changeImmutablyWithSetTimeout()"
    >
      Change Immutably Wrapped in setTimeout
    </button>

    <button mat-raised-button color="primary" (click)="doNothing()">
      Do Nothing
    </button>

    {{ getter }}
    <div style="display: flex; justify-content: space-between; ">
      <app-child name="1" [data]="data"></app-child>
      <app-child name="2" [data]="data"></app-child>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit {
  data = { title: 'lower', subtitle: 'case' };

  count = 0;

  get getter() {
    console.log('change detection ran for parent');
    this.count++;
    this.loggingService.add(`Parent. Ran ${this.count} times`);
    return '';
  }

  constructor(public loggingService: LoggingService) {}

  ngOnInit(): void {}

  changeMutably() {
    if (this.data.title === 'lower') {
      this.data.title = 'UPPER';
    } else {
      this.data.title = 'lower';
    }
  }

  changeImmutably() {
    if (this.data.title === 'lower') {
      this.data = { title: 'UPPER', subtitle: 'case' };
    } else {
      this.data = { title: 'lower', subtitle: 'case' };
    }
  }

  changeImmutablyWithSetTimeout() {
    setTimeout(() => {
      if (this.data.title === 'lower') {
        this.data = { title: 'UPPER', subtitle: 'case' };
      } else {
        this.data = { title: 'lower', subtitle: 'case' };
      }
    });
  }

  doNothing() {}
}
