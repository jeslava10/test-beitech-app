import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerOrderComponent  } from './components/list-customer-order/list-customer-order.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'testBeitech' },
  { path: 'testBeitech', component: ListCustomerOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
