import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { BannerOneComponent } from '../layout/banner-one/banner-one.component';
import { BannerTwoComponent } from '../layout/banner-two/banner-two.component';
import { BannerThreeComponent } from '../layout/banner-three/banner-three.component';
import { NavComponent } from '../layout/nav/nav.component';
import { ProductsComponent } from '../layout/products/products.component';
import { ContactUsComponent } from '../layout/contact-us/contact-us.component';
import { MobPartComponent } from '../products/mob-part/mob-part.component';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { LEDComponent } from '../products/led/led.component';
import { WashingMashineComponent } from '../products/washing-mashine/washing-mashine.component';
import { PagenotfoundComponent } from '../layout/pagenotfound/pagenotfound.component';
import { HomeComponent } from '../layout/home/home.component';
import { MotoComponent } from '../products/mob-part/moto/moto.component';
import { SamComponent } from '../products/mob-part/sam/sam.component';
import { AppRoutingModule } from './app-routing.module';
import { AllPipesModule } from './all-pipes.module';



@NgModule({
  declarations: [
    FooterComponent, 
    BannerOneComponent, 
    BannerTwoComponent, 
    BannerThreeComponent, 
    NavComponent, 
    ProductsComponent, 
    ContactUsComponent, 
    MobPartComponent, 
    LaptopsComponent, 
    LEDComponent, 
    WashingMashineComponent, 
    PagenotfoundComponent, 
    HomeComponent, 
    MotoComponent, 
    SamComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  FormsModule,
  AllPipesModule

  ],
  exports:[
    FooterComponent, 
    BannerOneComponent, 
    BannerTwoComponent, 
    BannerThreeComponent, 
    NavComponent, 
    ProductsComponent, 
    ContactUsComponent, 
    MobPartComponent, 
    LaptopsComponent, 
    LEDComponent, 
    WashingMashineComponent, 
    PagenotfoundComponent, 
    HomeComponent, 
    MotoComponent, 
    SamComponent
  ]
})
export class AllComponentModule { }
