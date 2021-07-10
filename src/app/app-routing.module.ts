import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerPageComponent} from "./components/customer-page/customer-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";
import {OdrerPageComponent} from "./components/order-page/odrer-page.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";
import {OrderGuard} from "./guards/order.guard";
import {LoginPageComponent} from "./components/login-page/login-page.component";

const routes: Routes = [
  // {path:'',component:CustomerPageComponent},
  {path:'',redirectTo:'/customer',pathMatch:'full'},
  {path:'customer', component:CustomerPageComponent},
  {path:'item', component:ItemPageComponent},
  {path:'order', component:OdrerPageComponent,canActivate:[OrderGuard]},
  {path:'login', component:LoginPageComponent},
  {path:'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
