import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';

const routes: Routes = [
  { component: ToDoPageComponent, path: 'todo'},
  { component: HomePageComponent, path: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
