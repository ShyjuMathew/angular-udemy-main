import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  editForm = false;
  submitted = false;
  id: string = '';
  genders = ['Male', 'Female', 'Other'];
  addEditForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    if (this.router.url.includes('edit')) {
      this.editForm = true;
      this.route.params.subscribe({
        next: (res: any) => {
          this.getUserData(res.id);
        },
      });
    }
    this.route.params.subscribe((res) => (this.id = res['id']));
    this.addEditForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      ...(!this.editForm && {
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
      }),
      ...(!this.editForm && {
        confirmPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
      }),
      date_of_birth: new FormControl(null, Validators.required),
      phone_number: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]{10,}$/),
      ]),
      gender: new FormControl('Male', Validators.required),
    });
  }

  getUserData(id: string) {
    this.isLoading = true;
    this.customerService.getEditData(id).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.addEditForm.setValue({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          username: res.data.username,
          phone_number: res.data.phone_number,
          email: res.data.email,
          date_of_birth: res.data.date_of_birth,
          gender: res.data.gender,
        });
      },
      error: () => (this.isLoading = false),
    });
  }

  onSubmit() {
    this.submitted = true;
    this.isLoading = true;
    if (this.addEditForm.status === 'VALID' && !this.editForm) {
      delete this.addEditForm.value.confirmPassword;
      this.customerService.addData(this.addEditForm.value).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/customer']);
        },
        error: (error) => {
          this.isLoading = false;
          console.log('Response: ', error);
        },
      });
    }
    if (this.addEditForm.status === 'VALID' && this.editForm) {
      this.customerService.editData(this.id, this.addEditForm.value).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/customer']);
        },
        error: (error) => {
          this.isLoading = false;
          console.log('Response: ', error);
        },
      });
    }
    if (this.addEditForm.status === 'INVALID') {
      this.isLoading = false;
    }
  }
}
