import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.css'],
})
export class CreateWalletComponent implements OnInit {
  public category = '';
  public amount = '';
  public message = '';
  public budgetArray: any = localStorage['BudgetApp']
    ? JSON.parse(localStorage['BudgetApp'])
    : [];
  public currentIndex: any = localStorage['CurrentIndex']
    ? JSON.parse(localStorage['CurrentIndex'])
    : [];
  public _id: any;
  public existingWallet: any;
  public currentUserWallets: any = [];
  public checkWallet: any;
  public currentUserName:any
  constructor() {}

  ngOnInit(): void {
    this.currentUserWallets = this.budgetArray[this.currentIndex].myWallets;
    this.currentUserName= this.budgetArray[this.currentIndex].lastname

  }
  createWalletBtn() {
    this.checkWallet = this.currentUserWallets.find(
      (item: any) => item.category == this.category
    );

    if (this.category == '' && this.amount == '') {
      this.message = 'Please Kindly Fill Up The Input';
    } else if (this.category == '' || this.amount == '') {
      this.message = 'Please Kindly Fill Up The Missing Details';
    } else if (this.checkWallet) {
      this.message = 'Wallet already exist';
    } else {
      let myDate = new Date();
      let allTime =
        myDate.getHours() +
        ':' +
        myDate.getMinutes() +
        ':' +
        myDate.getSeconds();
      let allDate =
        myDate.getFullYear() +
        '-' +
        (myDate.getMonth() + 1) +
        '-' +
        myDate.getDay();
      let walletObj = {
        category: this.category,
        amount: this.amount,
        _id: Math.floor(100000 + Math.random() * 900000),
        items: [],
        totalOfItems: 0,
        date: allDate,
        time: allTime,
      };
      this.budgetArray[this.currentIndex].myWallets.push(walletObj);

      localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));
      this.message = 'Wallet created successfully';

      this.amount = '';
      this.category = '';
    }
  }
}
