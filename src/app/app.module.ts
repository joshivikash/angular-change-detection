import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { GrandchildComponent } from './grandchild.component';
import { LoggingComponent } from './logging.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatButtonModule],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GrandchildComponent,
    LoggingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
