import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetplannerRoutingModule } from './budgetplanner-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, BudgetplannerRoutingModule, ReactiveFormsModule],
})
export class BudgetplannerModule {}
