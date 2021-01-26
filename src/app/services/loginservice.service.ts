import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private isLoggedIn=false;
  
  getloggedIn(){
    return this.isLoggedIn;
  }

  setloggedIn(flag){
    this.isLoggedIn=flag;
  }

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:8080/auth";
 
  auth(request) {
    let headers = new Headers();
    headers.set("contentType","application/json");
    return this.http.post(this.url, request);
  }


}
