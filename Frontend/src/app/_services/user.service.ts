import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  public static BaseUrl = "http://localhost:6565/";

  constructor(private http: HttpClient) { }

  postfitnessdata(data: any) {
    // write your logic here
    return null;
  }
  getfitnessdata() {
    // write your logic here
    return null;
  }
}
