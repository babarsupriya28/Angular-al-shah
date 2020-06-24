import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqrtPipe } from '../sqrt.pipe';



@NgModule({
  declarations: [SqrtPipe],
  imports: [
    CommonModule
  ],
  exports:[SqrtPipe]
})
export class AllPipesModule { }
