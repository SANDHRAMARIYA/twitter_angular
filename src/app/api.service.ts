import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  adduser=(data:any)=>{
    return this.http.post("http://localhost:8080/adduser",data)
  }

  signin=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }

  addPost=(data:any)=>{
    return this.http.post("http://localhost:8080/addPost",data)
  }

  view=()=>{
    return this.http.get("http://localhost:8080/view")
  }
}
