import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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

@NgModule({
  declarations: [AppComponent, SqrtPipe, FooterComponent, BannerOneComponent, BannerTwoComponent, BannerThreeComponent, NavComponent, ProductsComponent, ContactUsComponent, MobPartComponent, LaptopsComponent, LEDComponent, WashingMashineComponent],
  imports: [BrowserModule,FormsModule], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}
