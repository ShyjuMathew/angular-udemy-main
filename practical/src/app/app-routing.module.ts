import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'newsfeed', component: NewsFeedComponent },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
