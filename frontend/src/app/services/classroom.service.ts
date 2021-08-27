import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private env:string;
  constructor(private _http:HttpClient) {
    this.env = environment.APP_URL;
   }

   registerClassRoom(classroom:any){
     return this._http.post<any>(this.env+'classroom/registerClassroom',classroom)
   }
}
