import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';








import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginSignUpComponent } from './login-sign-up/login-sign-up.component';
import { T2Component } from './t2/t2.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousalComponent } from './carousal/carousal.component';
import { Carousal1Component } from './carousal1/carousal1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { WayanadComponent } from './wayanad/wayanad.component';
import { T3Component } from './t3/t3.component';
import { HeaderComponent } from './header/header.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { TrivandrumComponent } from './trivandrum/trivandrum.component';
import { KochiComponent } from './kochi/kochi.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    NavbarComponent,
    LoginSignUpComponent,
    T2Component,
    CarousalComponent,
    Carousal1Component,
    ContactusComponent,
    FooterComponent,
    WayanadComponent,
    T3Component,
    HeaderComponent,
    AlappuzhaComponent,
    TrivandrumComponent,
    KochiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,

    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,

    MatFormFieldModule,
    NgbModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
