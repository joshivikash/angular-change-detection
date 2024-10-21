import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-child',
  styles: [
    `
      :host {
        display: block;
        width: 45%;
        color: white;
        border: green dashed 4px;
        padding: 10px;
      }
    `,
  ],
  template: `
    <p>Child {{ name }} - {{ data | json }}</p>
    <p>{{ number }}</p>
    <p>{{ getter }}</p>

    <button mat-raised-button color="primary" (click)="doNothing()">
      Do Nothing
    </button>

    <div style="display: flex; justify-content: space-between; ">
      <!-- <app-grandchild name="1" [data]="data"></app-grandchild>
      <app-grandchild name="2" [data]="data"></app-grandchild>  -->
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent implements OnInit, DoCheck {
  number = 0;
  count = 0;

  @Input() data: any;
  @Input() name?: string;

  ngDoCheck() {
    this.cdr.markForCheck();
  }

  get getter() {
    console.log('change detection ran for child', this.name);
    this.count++;
    this.loggingService.add(`Child ${this.name}. Ran ${this.count} times`);
    return '';
  }

  constructor(
    public loggingService: LoggingService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.number = this.number + 1;
      this.cdr.markForCheck();
    }, 1000);
  }

  doNothing() {}
}
