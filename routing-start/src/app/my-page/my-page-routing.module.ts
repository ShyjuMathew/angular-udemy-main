import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPageComponent } from './my-page.component';
import { MyPageListComponent } from './my-page-list/my-page-list.component';

const routes: Routes = [
  {
    path: '',
    component: MyPageComponent,
    children: [
      {
        path: 'list',
        component: MyPageListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageRoutingModule {}
