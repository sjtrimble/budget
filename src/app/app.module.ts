import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { BudgetCounterComponent } from "./budget-counter/budget-counter.component";
import { ExpenseListComponent } from "./expense-list/expense-list.component";
import { ExpenseItemComponent } from "./expense-item/expense-item.component";
import { ExpenseDetailComponent } from "./expense-detail/expense-detail.component";
import { BudgetOverviewComponent } from './budget-overview/budget-overview.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'},
  { path: 'overview', component: BudgetOverviewComponent },
  { path: 'expense-detail', component: ExpenseDetailComponent }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BudgetCounterComponent,
    ExpenseListComponent,
    ExpenseItemComponent,
    ExpenseDetailComponent,
    BudgetOverviewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
