import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-wallet',
  templateUrl: './view-wallet.component.html',
  styleUrls: ['./view-wallet.component.css'],
})
export class ViewWalletComponent implements OnInit {
  public budgetArray: any;
  public category = '';
  public amount = '';
  public currentIndex: any;
  public currentUserWallet: any = [];

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.budgetArray = JSON.parse(localStorage['BudgetApp']);

    this.currentIndex = JSON.parse(localStorage['CurrentIndex']);
    this.currentUserWallet = this.budgetArray[this.currentIndex].myWallets;

    console.log(this.currentUserWallet);
  }
 
}
