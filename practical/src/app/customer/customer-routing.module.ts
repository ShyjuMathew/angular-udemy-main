import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../auth-guard';
import { CustomerComponent } from './customer.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
      {
        path: 'add',
        component: AddEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        component: AddEditComponent,
        canActivate: [AuthGuard],
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
