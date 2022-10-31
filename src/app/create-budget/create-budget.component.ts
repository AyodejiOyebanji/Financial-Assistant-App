import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css'],
})
export class CreateBudgetComponent implements OnInit {
  public item = '';
  public amount = '';
  public date = '';
  public budgetArray: any = localStorage['MyWallet']
    ? JSON.parse(localStorage['MyWallet'])
    : [];
  public currentUserIndex: any;
  public currentRouteId: any;
  // public walletIndex: any;
  public message = '';

  // public currentWalletBudgetItem:any

  public currentUserwallet: any = [];
  public findCurrentWallet: any;
  public currentBudgetIndex: any;
  public budgetTotal = 0;
  public walletCategory: any;

  constructor(public router: Router, public actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.budgetArray = JSON.parse(localStorage['BudgetApp']);
    this.currentRouteId = this.actRoute.snapshot.params['_id'];
    this.currentUserIndex = JSON.parse(localStorage['CurrentIndex']);
    this.currentUserwallet = this.budgetArray[this.currentUserIndex].myWallets;

    this.findCurrentWallet = this.currentUserwallet.find(
      (item: any, index: any) => item._id == this.currentRouteId
    );

    this.currentBudgetIndex = this.currentUserwallet.indexOf(
      this.findCurrentWallet
    );

    this.walletCategory = this.findCurrentWallet.category;
  }
  addBudget() {
    let budgetObj = {
      item: this.item,
      amount: this.amount,
      date: this.date,
    };
    if (this.item == '' && this.amount == '' && this.date == '') {
      this.message = 'Kindly fill up your details';
    } else if (this.item == '' || this.amount == '' || this.date == '') {
      this.message = 'kINDLY FILL IN THE MISSING DETAILS';
    } else if (
      this.findCurrentWallet.amount - this.findCurrentWallet.totalOfItems <
      Number(this.amount)
    ) {
      this.message = 'Your wallet amount is too low';
    } else {
      //To update the Items in the current wallet
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentBudgetIndex
      ].items.push(budgetObj);
      //To update the total balance in the current wallet
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentBudgetIndex
      ].totalOfItems += parseInt(this.amount);
      // to update local storage
      localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));

      this.message = 'Budget Added Successfully';
      this.item = '';
      this.amount = '';
      this.date = '';
    }
  }

  viewBudget() {
    this.router.navigate([`/viewbudget/${this.walletCategory}`]);
  }
}
