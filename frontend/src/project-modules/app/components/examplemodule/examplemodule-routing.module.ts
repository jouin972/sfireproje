import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplemoduleComponent } from './examplemodule.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplemoduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleModuleRoutingModule {}
