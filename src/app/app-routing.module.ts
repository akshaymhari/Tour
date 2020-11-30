import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { CarousalComponent } from './carousal/carousal.component';
import { Carousal1Component } from './carousal1/carousal1.component';
import { ContactusComponent } from './contactus/contactus.component';


import { HomeComponent } from './home/home.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { T2Component } from './t2/t2.component';
import { TestComponent } from './test/test.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginSignUpComponent },
  { path: 't2', component: T2Component },
  { path: 'back', component: BackgroundComponent },
  { path: 'carousal', component: CarousalComponent },
  { path: 'carousal1', component: Carousal1Component },
  { path: 'contact', component: ContactusComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
