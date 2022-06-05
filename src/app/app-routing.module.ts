import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReviewComponent } from './customers-reviews/customer-review/customer-review.component';
import { HeaderComponent } from './header/header/header.component';

const routes: Routes = [
  {path : 'home',component : HeaderComponent},
  {path : 'customer-reviews',component : CustomerReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
