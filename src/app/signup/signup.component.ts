import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

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
    alert("succesfully added")
    this.myapi.adduser(data).subscribe(
      (res)=>{
        alert("successfully added")
      }
    )
    this.name=""
    this.phnum=""
    this.dob=""
    this.place=""
    this.emailid=""
    this.password=""
    this.conpass=""


  }


  ngOnInit(): void {
  }

}
