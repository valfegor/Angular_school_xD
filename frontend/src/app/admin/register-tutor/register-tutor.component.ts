import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-tutor',
  templateUrl: './register-tutor.component.html',
  styleUrls: ['./register-tutor.component.css'],
})
export class RegisterTutorComponent implements OnInit {
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public durationInseconds:number;
  constructor(
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _masterService: MasterService
  ) {
    this.message = '';
    this.durationInseconds = 2;
    this.registerData = {};
  }

  ngOnInit(): void {}

  registerMaster(){
    if(!this.registerData.name || !this.registerData.phone || !this.registerData.adress || !this.registerData.expertise || !this.registerData.email || !this.registerData.password){
      this.message = 'Failed the process the data its incomplete';
      this.openSnackBarError();
      this.registerData = {};
    }
    else{
      this._masterService.registerMaster(this.registerData).subscribe(
        (res)=>{
          localStorage.setItem('token',res.jwtToken);
          this._router.navigate(['/registerClases']);
          this.message = 'Succesfull Registered';
          this.openSnackBarSuccesfull();
          this.registerData={};
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
