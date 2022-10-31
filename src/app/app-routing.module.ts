import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { ViewEachBudgetComponent } from './view-each-budget/view-each-budget.component';
import { ViewWalletComponent } from './view-wallet/view-wallet.component';

const routes: Routes = [
  {path:"", component:SignUpComponent},
  {path:"signin", component:SignInComponent},
  {path:"home", component:HomeComponent },
  {path:"createwallet", component:CreateWalletComponent},
  {path:"viewwallet", children:[
    {path:"", component:ViewWalletComponent},
    {path:":_id", component:CreateBudgetComponent},
  ]},

  {path:"viewbudget", children:[
    {path:":walletcategory",component:ViewBudgetComponent},
    {path:":vieweachbudget",component:ViewEachBudgetComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
