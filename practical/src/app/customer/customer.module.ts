import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomerComponent, ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class CustomerModule {}
