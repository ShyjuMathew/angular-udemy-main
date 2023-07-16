import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './basic-highlight/better-highlight.directive';
import { UnlessDirective } from './basic-highlight/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
