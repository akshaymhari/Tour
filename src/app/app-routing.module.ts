import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { CarousalComponent } from './carousal/carousal.component';
import { Carousal1Component } from './carousal1/carousal1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './home/home.component';
import { KochiComponent } from './kochi/kochi.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { T2Component } from './t2/t2.component';
import { T3Component } from './t3/t3.component';
import { TestComponent } from './test/test.component';
import { TrivandrumComponent } from './trivandrum/trivandrum.component';
import { WayanadComponent } from './wayanad/wayanad.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'login', component: LoginSignUpComponent },
  { path: 't2', component: T2Component },
  { path: 't3', component: T3Component },
  { path: 'carousal', component: CarousalComponent },
  { path: 'carousal1', component: Carousal1Component },
  { path: 'contact', component: ContactusComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'wayanad', component: WayanadComponent },
  { path: 'kochi', component: KochiComponent },
  { path: 'trivan', component: TrivandrumComponent },
  { path: 'alappy', component: AlappuzhaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
