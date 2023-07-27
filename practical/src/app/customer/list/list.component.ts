import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  isLoading = false;
  customerList: any = [];
  someValue = 'Parent to child default value';
  searchText: string = '';

  constructor(
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    this.customerService.getCustomerList().subscribe({
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

  onSearch(reset?: string) {
    if (reset) {
      this.searchText = '';
    }
    this.customerService.getCustomerList(this.searchText).subscribe({
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

  childAlert(data: any) {
    alert(`Received message from child: ${data}`);
  }
}
