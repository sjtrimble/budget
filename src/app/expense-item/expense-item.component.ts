import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expense-item',
  templateUrl: './expense-item.component.html'
})
export class ExpenseItemComponent implements OnInit {

  expenseItem = {
    name: 'Nail Salon',
    amount: 35
  };

  constructor() { }

  ngOnInit() {
  }

}
