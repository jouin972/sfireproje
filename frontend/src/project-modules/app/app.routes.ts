import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokesListComponent, JokeDetailComponent } from './components';

const routes: Routes = [
  { path: '', component: JokesListComponent },
  { path: 'detail/:id', component: JokeDetailComponent },
  { path: 'moduleB', loadChildren: './components/examplemodule/examplemodule.module#ExamplemoduleModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
