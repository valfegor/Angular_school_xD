import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterStudentComponent } from './home/register-student/register-student.component';
import { RegisterTutorComponent } from './admin/register-tutor/register-tutor.component';
import { RegisterClasesComponent } from './admin/register-clases/register-clases.component';
import { RegisterClassroomComponent } from './admin/register-classroom/register-classroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//imports para los formularios.

import { FormsModule,ReactiveFormsModule } from "@angular/forms";

//import http (protocolo).

import { HttpClientModule } from "@angular/common/http";


//imports material

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterStudentComponent,
    RegisterTutorComponent,
    RegisterClasesComponent,
    RegisterClassroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
