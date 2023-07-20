import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPageRoutingModule } from './my-page-routing.module';
import { MyPageComponent } from './my-page.component';
import { MyPageListComponent } from './my-page-list/my-page-list.component';


@NgModule({
  declarations: [
    MyPageComponent,
    MyPageListComponent
  ],
  imports: [
    CommonModule,
    MyPageRoutingModule
  ]
})
export class MyPageModule { }
