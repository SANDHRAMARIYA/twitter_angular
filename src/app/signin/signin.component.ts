import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }


  username=""
  password=""

  readValues=()=>{
    let data={
      "username":this.username,
      "password":this.password
    }
if (this.username=="admin" && this.password=="123")
{
 this.myrouter.navigate(["/signup"])
}
else
{
  alert("invalid login")
}
    console.log(data)
   
  }

  ngOnInit(): void {
  }

}
