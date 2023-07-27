import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomerList(search?: string) {
    return this.http.post(
      'https://lumen-lts.brainvire.dev/admin/api/v1/user/list',
      {
        ...(search && { name: search }),
        start: 0,
        length: 10,
        sort_param: 'created_at',
        sort_type: 'desc',
      }
    );
  }

  getEditData(id: string) {
    return this.http.get(
      `https://lumen-lts.brainvire.dev/admin/api/v1/user/show/${id}`
    );
  }

  addData(data: any) {
    return this.http.post(
      'https://lumen-lts.brainvire.dev/admin/api/v1/user/create',
      data
    );
  }

  editData(id: string, data: any) {
    return this.http.post(
      `https://lumen-lts.brainvire.dev/admin/api/v1/user/update/${id}`,
      data
    );
  }
}
