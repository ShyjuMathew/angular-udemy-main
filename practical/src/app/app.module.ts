import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewsFeedComponent, CustomersComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
