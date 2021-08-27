import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-classroom',
  templateUrl: './register-classroom.component.html',
  styleUrls: ['./register-classroom.component.css']
})
export class RegisterClassroomComponent implements OnInit {

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
