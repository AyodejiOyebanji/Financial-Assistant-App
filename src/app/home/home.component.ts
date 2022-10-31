import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // public accountName = '';
  // public accountBalance = 0;
  // public item: string = '';
  // public price: any;
  // public quantity: any;
  // public itemArray: Array<any> = [];
  // public total = 0;
  // public errorMsg = '';
  // public getItem:any
  // public editedIndex:any
  public currentUserName:any
  public budgetArray:any=[]
  public currentUserIndex:any

  constructor(public router:Router) {}

  ngOnInit(): void {
  this.budgetArray= localStorage['BudgetApp']
  ? JSON.parse(localStorage['BudgetApp'])
  : [];
  this.currentUserIndex=localStorage['CurrentIndex']
  ? JSON.parse(localStorage['CurrentIndex'])
  : [];
  this.currentUserName=this.budgetArray[this.currentUserIndex].lastname

  }

  // addItem() {
  //   if (this.item == '' && this.price == '' && this.quantity == '') {
  //     this.errorMsg = 'Please input your budget';
  //   } else if (this.item == '' || this.price == '' || this.quantity == '') {
  //     this.errorMsg = 'Please input the missing field';
  //   } else if (this.accountBalance < this.price) {
  //     this.errorMsg = 'Your balance is low';
  //   } else {
  //     let itemObj = {
  //       item: this.item,
  //       price: this.price,
  //       quantity: this.quantity,
  //     };
  //     this.itemArray.push(itemObj);
  //     this.total += parseInt(this.price);
  //   }
  //   this.item=""
  //   this.price=""
  //   this.quantity=""
  // }
  // deleteBtn(i: any) {
  //   this.total = this.total - this.itemArray[i].price;
  //   this.itemArray = this.itemArray.filter(
  //     (student: any, index: any) => index != i
  //   );
  // }
  // getItemBtn(i:any){
  //   this.editedIndex=i
  //   this.getItem= this.itemArray.find((item:any,index:any)=>index==i)
  //   this.item= this.getItem.item
  //   this.price= this.getItem.price
  //   this.quantity= this.getItem.quantity
  // }
  // saveEditedBudget(){
  //   let editedDetails={
  //     item:this.item,
  //     price:this.price,
  //     quantity:this.quantity
  //   }
  //   this.itemArray[this.editedIndex]=this.editedIndex


  // }
  createBudget(){
    this.router.navigate(["/createwallet"])
  }

  viewWallet(){
    this.router.navigate(["/viewwallet"])
  }


}
