import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // registrationForm = new FormGroup({});
  title = 'toDo';
  name : string ="";
  class !: number;
  rollno!: number;
  phone!: number;



getValue(res: any){
  if (res.Name && res.Class &&  res.Rollno && res.Phone ) {
    
    if(res.Class<= 12){
      const result = res.list.Name.charCodeAt(0);
      if (result==32) {
        alert("Please Remove pre-space in name field");
      }else{
        this.name = res.Name;
        this.class = res.Class;
      this.rollno = res.Rollno;
    this.phone = res.Phone;
      }
      
      
  }else{
      alert("Please enter Valid class upto 12")
    }
  }else {
    alert("please fill all fields")
  }
    }
    }
    




