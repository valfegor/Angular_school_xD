import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private env :string;
  constructor(
    private _http: HttpClient,
    

  ) { 
    this.env = environment.APP_URL;
  }

  registerCourses(courses:any){
      return this._http.post<any>(this.env+'courses/registerCourse',courses);
  }

}
