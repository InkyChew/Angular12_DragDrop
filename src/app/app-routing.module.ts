import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputBtnComponent } from './input-btn/input-btn.component';
import { MainComponent } from './main/main.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'inputbtn', component: InputBtnComponent},
  {path: 'todo', component: TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
