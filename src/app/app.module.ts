import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';
import { ButtonDesignComponent } from './button-design/button-design.component';
import { PopupComponent } from './popup/popup.component';
import {  MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    ToDoPageComponent,
    ButtonDesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
