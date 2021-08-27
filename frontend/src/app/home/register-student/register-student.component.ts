import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudentService } from '../../services/estudent.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public durationInseconds: number;
  constructor(
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _estudentService: EstudentService
  ) {
    this.message = '';
    this.registerData = {};
    this.durationInseconds = 2;
  }

  ngOnInit(): void {}

  registerEstudent(){
    if(!this.registerData.name || !this.registerData.email || !this.registerData.adress || !this.registerData.parentName || !this.registerData.parentEmail || !this.registerData.estudentPhone || !this.registerData.parentPhone || !this.registerData.password){
      console.log('Failed the process the data its incomplete');
      this.message = 'Failed the process the data its incomplete';
      this.openSnackBarError();
      this.registerData = {};
    }
    else{
      this._estudentService.registerEstudent(this.registerData).subscribe(
        (res)=>{
          localStorage.setItem('token',res.jwtToken);
          this._router.navigate(['/registerClases']);
          this.message = 'Succesfull Estudent Registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (err)=>{
          console.log(err);
          this.message=err.error;
          this.openSnackBarError();
        }
      )
    }
  }


  openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion 
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.durationInseconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }
  
  openSnackBarError() {
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.durationInseconds*1000,
      panelClass:['style-snackBarFalse']
    });
  }
  
}


