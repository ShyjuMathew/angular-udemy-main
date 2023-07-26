import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isLoading = false;
  customerList: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.http
      .post('https://lumen-lts.brainvire.dev/admin/api/v1/user/list', {
        start: 0,
        length: 10,
        sort_param: 'created_at',
        sort_type: 'desc',
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

  onEdit(id: number) {
    this.router.navigate([`customer/edit/${id}`]);
  }

  onAdd() {
    this.router.navigate([`customer/add`]);
  }
}
