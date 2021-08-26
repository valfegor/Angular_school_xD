import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClasesComponent } from './admin/register-clases/register-clases.component';
import { RegisterClassroomComponent } from './admin/register-classroom/register-classroom.component';
import { RegisterTutorComponent } from './admin/register-tutor/register-tutor.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerTutor',
    component: RegisterTutorComponent,
    pathMatch: 'full',
  },
  {
    path:'registerClases',
    component:RegisterClasesComponent,
    pathMatch: 'full',
  },
  {
    path: 'registerClassRoom',
    component:RegisterClassroomComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
