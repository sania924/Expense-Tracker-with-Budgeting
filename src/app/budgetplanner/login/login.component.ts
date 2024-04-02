import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: any;
  registerFrom: any;
  activateForm: 'login' | 'register' = 'login';
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // register form
    this.registerFrom = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // toggle button
  toggleForm(form: 'login' | 'register') {
    this.activateForm = form;
  }
  // submitloginFOrm
  submitloginForm() {
    console.log(this.loginForm);
    this.router.navigate(['/budgetplanner/dashboard']);
  }
  submitregisterForm() {
    console.log(this.registerFrom);
    this.router.navigate(['/login']);
  }
}
