import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CoursesService } from "../../services/courses.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';



@Component({
  selector: 'app-register-clases',
  templateUrl: './register-clases.component.html',
  styleUrls: ['./register-clases.component.css']
})
export class RegisterClasesComponent implements OnInit {
  public registerData:any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public durationInseconds: number;
  constructor(
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _coursesService:CoursesService
  ) { 
    this.message = '';
    this.registerData = {};
    this.durationInseconds=2;
  }

  ngOnInit(): void {
  }

  registerCourses(){
    if(!this.registerData.name || !this.registerData.ubication || !this.registerData.code || !this.registerData.date){
      this.message = 'Failed the process the data its incomplete';
      this.openSnackBarError();
      this.registerData={};

    }
    else{
      this._coursesService.registerCourses(this.registerData).subscribe(
        (res) => {
          this._router.navigate(['/registerTutor']);
          this.message = 'Course Added Succesfull';
          this.openSnackBarSuccesfull();
          this.registerData={};
        },
        (err) => {
          this.message = err.error;
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
