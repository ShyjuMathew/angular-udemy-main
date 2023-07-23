import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const authKey = localStorage.getItem('authToken')
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${authKey}`)
    }

    this.http.post('https://lumen-lts.brainvire.dev/admin/api/v1/user/list', { length: '10' }, header)
      .subscribe({
        next: (res) => { console.log('Response: ', res) },
        error: (err) => { console.log('Error: ', err) }
      })
  }
}