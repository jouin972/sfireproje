import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokesListComponent, JokeDetailComponent } from './components';

const routes: Routes = [
  { path: '', component: JokesListComponent },
  { path: 'detail/:id', component: JokeDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {}
