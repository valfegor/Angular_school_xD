import { Component, OnInit } from '@angular/core';
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
  constructor(
    private _snackbar: MatSnackBar
  ) { 
    this.message = '';
    this.registerData = {};
  }

  ngOnInit(): void {
  }

}
