import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'newsfeed', component: NewsFeedComponent },
  {
    path: 'customers',
    component: CustomersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/edit/:id',
    component: AddEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/add',
    component: AddEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
