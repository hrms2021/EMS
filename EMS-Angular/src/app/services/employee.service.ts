
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employees';
  private baseUrlNode ='http://localhost:3001'

  constructor(public http: HttpClient) { 

  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getLeaveDetails(){
    return this.http.get(`${this.baseUrl}/`+"/getLeaves");
  }
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+"/createEmployee", employee);
  }

  updateEmployee(id: number, employee: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  applyLeave(applyLeave: Object): Observable<Object> {
    return this.http.post(`${this.baseUrlNode}`+"/applyLeaves", applyLeave);
  }
  uploadDoc1(newObj:any, file) {
    return new Promise((resolve, reject) => {
      try {
        let apiName = '/uploadDocuments/' +newObj;
        this.postDocument(apiName, file).subscribe((data) => {
          if (data != null && data != undefined) {
            resolve(data);
          } else {
            reject();
          }
        }, (error) => {
          reject(error);
        })
      } catch (error) {
        reject(error);
      }
    });
  }

  postDocument(apiUrl, file): Observable<HttpResponse<Object>> {
    console.log('UPLOAD IMAGE ', file)
    const httpOptions = {
      headers: new HttpHeaders({
        // "Accept": "multipart/form-data",
        // "Accept": "application/json",
        'Access-Control-Allow-Origin': "*"
      }),
      observe: 'response' as 'response'
    };
    const formData: FormData = new FormData();
    //var blob = new Blob([files], {type : 'multipart/form-data'});
    
    if (file instanceof Array) {
      for (let i = 0; i < file.length; i++) {
        formData.append('file', file[i]);//blob, body.file);
      }
    }
    else {
      formData.append('file', file);//blob, body.file);
    }  
    return this.http.post(this.baseUrl + apiUrl, formData, httpOptions).pipe(map((observe: HttpResponse<any>) => {
      return observe;
    }))

 

  }
}