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
import { PrincipalComponent } from "./home/principal/principal.component";

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
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatGridListModule} from '@angular/material/grid-list'; 

//servicios

import { EstudentService } from "./services/estudent.service";
import { MasterService } from "./services/master.service";
import { ClassroomService } from "./services/classroom.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterStudentComponent,
    RegisterTutorComponent,
    RegisterClasesComponent,
    RegisterClassroomComponent,
    PrincipalComponent
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
    MatIconModule,
    MatDatepickerModule,
    MatGridListModule
  ],
  providers: [
    EstudentService,
    MasterService,
    ClassroomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
