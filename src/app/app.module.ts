import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormUserDetailsComponent } from './components/form-user-details/form-user-details.component';

// Material UI
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormPersonalDetailsComponent } from './components/form-personal-details/form-personal-details.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {MatListModule} from '@angular/material/list';
import { SuccessComponent } from './components/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    FormUserDetailsComponent,
    FormPersonalDetailsComponent,
    ConfirmComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
