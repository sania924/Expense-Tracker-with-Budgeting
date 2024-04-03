import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetplannerRoutingModule } from './budgetplanner-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './expense/expense.component';
import { HistoryComponent } from './history/history.component';
import { IncomeComponent } from './income/income.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    LoginComponent,
    SidenavComponent,
    DashboardComponent,
    ProfileComponent,
    HistoryComponent,
    IncomeComponent,
    ExpenseComponent,
    TodoComponent,
  ],
  imports: [CommonModule, BudgetplannerRoutingModule, ReactiveFormsModule],
})
export class BudgetplannerModule {}
