import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add_edit_customer',component:AddEditCustomerComponent},
  {path:'add_edit_customer/:id',component:AddEditCustomerComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: '**', redirectTo: '/login' },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
