import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CustomerReviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CustomerReviewComponent
  ]
})
export class CustomersReviewsModule { }
