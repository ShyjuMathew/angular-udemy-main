import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  isLoading = false;
  customerList: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;

    this.http
      .post('https://lumen-lts.brainvire.dev/admin/api/v1/user/list', {
        start: 0,
        length: 10,
      })
      .subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this.customerList = res.data.original.data;
        },
        error: (err) => {
          this.isLoading = false;
          console.log('Error: ', err);
        },
      });
  }
}
