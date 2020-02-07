import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplemoduleComponent } from './examplemodule.component';
import { RouterModule } from '@angular/router';
import { ExampleModuleRoutingModule } from './examplemodule-routing.module';



@NgModule({
  declarations: [ExamplemoduleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ExampleModuleRoutingModule
  ]
})
export class ExamplemoduleModule { }
