import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('f')
  signupForm!: NgForm;
  isSubmitting = false;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onSubmit() {
    this.isSubmitting = true;
    this.authService
      .login(
        this.signupForm.value.email,
        this.signupForm.value.password,
        'ADMIN'
      )
      .subscribe({
        next: (res: any) => {
          this.isSubmitting = false;
          if (res.data.access_token) {
            localStorage.setItem('authToken', res.data.access_token);
            this.router.navigate(['customer']);
          }
        },
        error: (error) => {
          this.isSubmitting = false;
          if (error.error.meta.message) {
            alert(error.error.meta.message);
            return;
          }
          alert('Something went wrong!');
        },
      });
  }
}
