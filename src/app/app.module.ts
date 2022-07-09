import { OtherServicesComponent } from './other-services/other-services.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { OurServicesComponent } from './our-services/our-services.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  
  {path:'OurServices',component:OurServicesComponent},
  {path:"OtherServices",component:OtherServicesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
