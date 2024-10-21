import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-grandchild',
  styles: [
    `
      :host {
        display: block;
        width: 40%;
        color: white;
        border: red dashed 4px;
        padding: 10px;
      }
    `,
  ],
  template: `
    <p>Grandchild {{ name }}</p>
    <p>{{ data | json }}</p>
    <p>{{ getter }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandchildComponent implements OnInit {
  @Input() data: any;
  @Input() name?: string;

  count = 0;

  get getter() {
    console.log('change detection ran for grandchild', this.name);
    this.count++;
    this.loggingService.add(`Grandchild ${this.name}. Ran ${this.count} times`);
    return '';
  }

  constructor(public loggingService: LoggingService) {}

  ngOnInit(): void {}
}
