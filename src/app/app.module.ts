
import { ComServiceService } from './services/com-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { SqrtPipe } from './sqrt.pipe';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';
import { NavComponent } from './layout/nav/nav.component';
import { ProductsComponent } from './layout/products/products.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { LEDComponent } from './products/led/led.component';
import { WashingMashineComponent } from './products/washing-mashine/washing-mashine.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { HomeComponent } from './layout/home/home.component';
import { MotoComponent } from './products/mob-part/moto/moto.component';
import { SamComponent } from './products/mob-part/sam/sam.component';
import { AllComponentModule } from './modules/all-component.module';
import { AllPipesModule } from './modules/all-pipes.module';
import { MobilemenuComponent } from './products/mob-part/mobilemenu/mobilemenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import {MatCheckboxModule} from '@angular/material/checkbox';

import { AllMaterialModule } from './modules/all-material.module';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilemenuComponent,
    LoginComponent,
    DashboardComponent, 
    // SqrtPipe, 
    // FooterComponent, 
    // BannerOneComponent, 
    // BannerTwoComponent, 
    // BannerThreeComponent, 
    // NavComponent, 
    // ProductsComponent, 
    // ContactUsComponent, 
    // MobPartComponent, 
    // LaptopsComponent, 
    // LEDComponent, 
    // WashingMashineComponent, 
    // PagenotfoundComponent, 
    // HomeComponent, 
    // MotoComponent, 
    // SamComponent
  ],
  imports: [BrowserModule,FormsModule, AppRoutingModule, 
    AllComponentModule, AllPipesModule, BrowserAnimationsModule, 
    AllMaterialModule,HttpModule
  ], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
  providers:
  [
    ComServiceService,
    AuthGuard

  ]
})
export class AppModule {}
