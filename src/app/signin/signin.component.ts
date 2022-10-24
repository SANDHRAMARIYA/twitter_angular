import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  email=""
  password=""

  readValues=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.signin(data).subscribe(
      (response:any)=>{
if (response.length>0)
  {

}else
{
alert("invalid credentials")
}
      }
    )
   
  }

  ngOnInit(): void {
  }

}
