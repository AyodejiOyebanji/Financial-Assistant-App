import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email="";
  public password="";
  public message="";
  public found:any
  public budgetArray: any = []
  public userIndex:any

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.budgetArray=localStorage['BudgetApp']
    ? JSON.parse(localStorage['BudgetApp'])
    : [];

  }
  signIn(){
    this.found=this.budgetArray.find((item:any)=>(
      item.email==this.email && item.password==this.password
    ))




    if(this.email==""&&   this.password == ''){
      this.message = 'PLEASE KINDLY FILL UP YOUR DETAILS';
    }else if(this.email=="" ||   this.password == ''){
      this.message = 'PLEASE KINDLY FILL UP THE MISSING DETAILS';
    }else if(!this.found){
      this.message = 'User not found';

    }else{
      this.userIndex= this.budgetArray.indexOf(this.found)
      localStorage.setItem("CurrentIndex", JSON.stringify(this.userIndex))
      this.router.navigate(["/home"])



    }
  }

}
