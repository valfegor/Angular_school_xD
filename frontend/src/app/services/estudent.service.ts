import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment  } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class EstudentService {
  private env:string;
  constructor(private _http:HttpClient) {
    this.env = environment.APP_URL;
   }

   registerEstudent(estudent:any){
    return this._http.post<any>(this.env+'estudent/registerEstudent',estudent);
   }

}
