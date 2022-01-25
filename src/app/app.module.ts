import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputBtnComponent } from './input-btn/input-btn.component';
import { HeaderComponent } from './header/header.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListContainerComponent } from './list-container/list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputBtnComponent,
    HeaderComponent,
    TodolistComponent,
    ListItemComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
