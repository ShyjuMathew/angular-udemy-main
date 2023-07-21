import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'customers', component: CustomersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
