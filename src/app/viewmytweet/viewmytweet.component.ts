import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmytweet',
  templateUrl: './viewmytweet.component.html',
  styleUrls: ['./viewmytweet.component.css']
})
export class ViewmytweetComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }



  fetchData=()=>{
    let data={
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.viewSingle(data).subscribe(
      (res)=>{
        this.viewData=res
      }
    )
    }
  viewData:any=[]
  ngOnInit(): void {
  }

}
