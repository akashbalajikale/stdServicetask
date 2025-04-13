import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoformComponent } from './shared/components/todoform/todoform.component';
import { TodolistComponent } from './shared/components/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StdformComponent } from './shared/components/stdform/stdform.component';
import { StdtableComponent } from './shared/components/stdtable/stdtable.component';

import {MatButtonModule} from '@angular/material/button';
 import {MatSnackBarModule} from '@angular/material/snack-bar';
 import {MatIconModule} from '@angular/material/icon';
 

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    StdformComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
