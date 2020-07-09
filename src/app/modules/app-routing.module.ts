import { LapiOffersComponent } from './../products/laptops/lapi-offers/lapi-offers.component';
import { LapidetailComponent } from './../products/laptops/lapidetail/lapidetail.component';
import { AdminGuard } from './../guards/admin.guard';
import { AuthGuard } from './../guards/auth.guard';
import { LoginComponent } from './../admin/login/login.component';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { MobilemenuComponent } from './../products/mob-part/mobilemenu/mobilemenu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../layout/home/home.component';
import { MobPartComponent } from '../products/mob-part/mob-part.component';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { LEDComponent } from '../products/led/led.component';
import { WashingMashineComponent } from '../products/washing-mashine/washing-mashine.component';
import { PagenotfoundComponent } from '../layout/pagenotfound/pagenotfound.component';
import { MotoComponent } from '../products/mob-part/moto/moto.component';
import { SamComponent } from '../products/mob-part/sam/sam.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'mobile',component:MobilemenuComponent,//nested routing
children:[
  {path:'',component:MobPartComponent},
  {path:'moto',component:MotoComponent},
  {path:'sam',component:SamComponent}


]},
  {path:'lapi',component:LaptopsComponent},
  {path:'lapiDetail',component:LapidetailComponent, outlet:"outlet1"},
  {path:'lapiOffers',component:LapiOffersComponent,outlet:"outlet2"},
  {path:'led',component:LEDComponent},
  {path:'washingM',component:WashingMashineComponent},
  {path:'dashboard',canActivate:[AuthGuard,AdminGuard],component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {
    path: 'lazy-child',
    loadChildren: '../modules/lazy/lazy.module#LazyModule',
  },
  {path:'**',component:PagenotfoundComponent},
 

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
