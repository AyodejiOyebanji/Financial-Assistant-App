import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css'],
})
export class ViewBudgetComponent implements OnInit {
  public budgetArray: any;
  public currentUserIndex: any = localStorage['CurrentIndex']
    ? JSON.parse(localStorage['CurrentIndex'])
    : [];
  public currentUserWallets: any;
  public findCurrentWalletInUse: any;
  public currentRouteId: any;
  public currentBudgetList: any = [];
  public total: any;
  public currentIndex: any;
  public currentBudgetItems: any;
  public filteredArray: any;
  public item: any;
  public amount: any;
  public date: any;
  public budgetEditedIndex: any;
  public message:any

  constructor(public actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.budgetArray = localStorage['BudgetApp']
      ? JSON.parse(localStorage['BudgetApp'])
      : [];
    this.currentRouteId = this.actRoute.snapshot.params['walletcategory'];
    this.currentUserWallets = this.budgetArray[this.currentUserIndex].myWallets;
    this.findCurrentWalletInUse = this.currentUserWallets.find(
      (item: any) => item.category == this.currentRouteId
    );
    this.currentBudgetList = this.findCurrentWalletInUse.items;
    console.log(this.currentBudgetList);

    this.total = this.findCurrentWalletInUse.totalOfItems;
    this.currentIndex = this.currentUserWallets.indexOf(
      this.findCurrentWalletInUse
    );
  }

  deleteBudget(i: any) {
    // to update the total
    this.total = this.total -= this.currentBudgetList[i].amount;

    this.budgetArray[this.currentUserIndex].myWallets[
      this.currentIndex
    ].totalOfItems = this.total;

    // to updated the deleted budget
    this.currentBudgetList = this.currentBudgetList.filter(
      (item: any, index: any) => index != i
    );
    this.budgetArray[this.currentUserIndex].myWallets[this.currentIndex].items =
      this.currentBudgetList;
    localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));
  }
  editBtn(i: any) {
    this.budgetEditedIndex = i;
    this.item = this.currentUserWallets[this.currentIndex].items[i].item;
    this.amount = this.currentUserWallets[this.currentIndex].items[i].amount;
    this.date = this.currentUserWallets[this.currentIndex].items[i].date;
  }
  save() {
    console.log(this.budgetEditedIndex);
    if(this.item==""&& this.amount=="" && this.date==""){
      this.message="Kindly fill up the details "
    }else if(this.item==""|| this.amount=="" || this.date==""){
      this.message="Kindly fill up the missing details "
    }
    else if (
      this.currentUserWallets[this.currentIndex].items[this.budgetEditedIndex]
        .amount > this.amount
    ) {
      let removedAmount = Number(
        this.currentUserWallets[this.currentIndex].items[this.budgetEditedIndex]
          .amount - Number(this.amount)
      );
      this.total = this.total - removedAmount;

      let editedDetails = {
        item: this.item,
        amount: this.amount,
        date: this.date,
      };
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentIndex
      ].totalOfItems = this.total;
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentIndex
      ].items[this.budgetEditedIndex] = editedDetails;
      localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));
    } else if (
      this.currentUserWallets[this.currentIndex].items[this.budgetEditedIndex]
        .amount < this.amount
    ) {
      let addedAmount =  Number(this.amount)- Number(
        this.currentUserWallets[this.currentIndex].items[this.budgetEditedIndex]
          .amount
      );

      this.total = this.total + addedAmount;


      let editedDetails = {
        item: this.item,
        amount: this.amount,
        date: this.date,
      };
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentIndex
      ].totalOfItems = this.total;
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentIndex
      ].items[this.budgetEditedIndex] = editedDetails;
      localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));
    } 
    else {
      let editedDetails = {
        item: this.item,
        amount: this.amount,
        date: this.date,
      };
      this.budgetArray[this.currentUserIndex].myWallets[
        this.currentIndex
      ].items[this.budgetEditedIndex] = editedDetails;
      localStorage.setItem('BudgetApp', JSON.stringify(this.budgetArray));
    }

    this.item="";
    this.amount="";
    this.date=""
  }
}
