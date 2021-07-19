import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'expense',
        component: ExpenseComponent
      }
    ])
  ]
})
export class DashboardModule { }
