import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:) { }

  name=""
  phnum=""
  dob=""
  place=""
  emailid=""
  password=""
  conpass=""

  readValues=()=>{
    let data={
      "name":this.name,
      "phnum":this.phnum,
      "dob":this.dob,
      "place":this.place,
      "emailid":this.emailid,
      "password":this.password,
      "conpass":this.conpass

    }
    console.log(data)
  }
signupData:any=[]

  ngOnInit(): void {
  }

}
