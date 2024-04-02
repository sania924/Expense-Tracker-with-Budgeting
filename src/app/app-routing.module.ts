import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './budgetplanner/login/login.component';
// import { LoginComponent } from './budgetplanner/login/login.component';

const routes: Routes = [
  {
    path: 'budgetplanner',
    loadChildren: () =>
      import('./budgetplanner/budgetplanner.module').then(
        (m) => m.BudgetplannerModule
      ),
  },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
