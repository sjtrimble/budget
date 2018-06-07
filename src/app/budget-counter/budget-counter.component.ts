import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'budget-counter',
  templateUrl: './budget-counter.component.html'
})
export class BudgetCounterComponent implements OnInit {

  currentMonth = 'May';
  budgetRemaining = 500;

  constructor() {
  }

  ngOnInit() {
  }

}
