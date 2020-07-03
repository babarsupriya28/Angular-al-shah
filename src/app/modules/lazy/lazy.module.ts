import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOneComponent } from './lazy-one/lazy-one.component';
import { LazyTwoComponent } from './lazy-two/lazy-two.component';
import { RouterModule, Routes } from '@angular/router';

const lazyRoutes: Routes = [
  {
    path: 'lazy-child',
    component: LazyOneComponent,
  },
  {
    path: 'lazy-child2',
    component: LazyTwoComponent,
  },
];

@NgModule({
  declarations: [LazyOneComponent,LazyTwoComponent],
  imports: [
    CommonModule,RouterModule.forChild(lazyRoutes)
  ]
})
export class LazyModule { }
