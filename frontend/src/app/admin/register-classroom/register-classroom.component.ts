import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {ClassroomService  } from "../../services/classroom.service";
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
  public durationInseconds: number;
  constructor(
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _classroomservice:ClassroomService
  ) { 
    this.message = '';
    this.registerData = {};
    this.durationInseconds = 2;
  }

  ngOnInit(): void {
  }
}
