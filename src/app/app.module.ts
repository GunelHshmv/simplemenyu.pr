import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SigninComponent } from './signin/signin.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// RouterModule.forRoot(route)