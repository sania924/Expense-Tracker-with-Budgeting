import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  constructor(private router: Router) {}

  onDash() {
    this.router.navigate(['/budgetplanner/dashboard']);
  }
  onProfile() {
    this.router.navigate(['/budgetplanner/profile']);
  }
  onHistory() {
    this.router.navigate(['/budgetplanner/history']);
  }
  onLogout() {
    this.router.navigate(['']);
  }
}
