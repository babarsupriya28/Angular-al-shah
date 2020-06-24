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
  {path:'mobile',component:MobPartComponent,
children:[
  {path:'moto',component:MotoComponent},
  {path:'sam',component:SamComponent}


]},
  {path:'lapi',component:LaptopsComponent},
  {path:'led',component:LEDComponent},
  {path:'washingM',component:WashingMashineComponent},
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
