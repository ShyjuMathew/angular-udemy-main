import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('f')
  signupForm!: NgForm;
  isSubmitting = false;
  constructor(private http: HttpClient) { }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    this.isSubmitting = true
    this.http.post('https://lumen-lts.brainvire.dev/admin/api/v1/oauth/signin', { email: this.signupForm.value.email, password: this.signupForm.value.password, role: "ADMIN" })
      .subscribe({
        next: (res: any) => {
          this.isSubmitting = false
          if (res.data.access_token) {
            localStorage.setItem('authToken', res.data.access_token)
          }
        },
        error: (error) => {
          this.isSubmitting = false
          if (error.error.meta.message) {
            alert(error.error.meta.message)
            return
          }
          alert('Something went wrong!')
        }
      });
  }
}
