import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';
  public budgetArray: any = localStorage['BudgetApp']
    ? JSON.parse(localStorage['BudgetApp'])
    : [];
  public message = '';
  public checkEmail: any;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  signUp() {
    let userdetails = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      myWallets: [],
    };
    if (
      this.firstname == '' &&
      this.lastname == '' &&
      this.email == '' &&
      this.password == ''
    ) {
      this.message = 'PLEASE KINDLY FILL UP YOUR DETAILS';
    } else if (
      this.firstname == '' ||
      this.lastname == '' ||
      this.email == '' ||
      this.password == ''
    ) {
      this.message = 'PLEASE KINDLY FILL UP THE MISSING DETAILS';
    } else if (this.password.length < 5) {
      this.message = 'YOUR PASSWORD IS LESS THAN 5 CHARACTERS';
    } else {
      this.budgetArray.push(userdetails);

      localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));
      this.router.navigate(['/signin']);
    }
  }
}
