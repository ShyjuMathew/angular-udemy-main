import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ListComponent } from './list/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputOutputComponent } from '../input-output/input-output.component';
import { LoaderModule } from '../ui/loader/loader.module';

@NgModule({
  declarations: [
    CustomerComponent,
    ListComponent,
    AddEditComponent,
    InputOutputComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
})
export class CustomerModule {}
