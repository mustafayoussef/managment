import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from '../Models/deal';

@Injectable({
  providedIn: 'root',
})
export class DealsService {
  baseUrl = 'https://my-json-server.typicode.com/mabukoush1/contacts/db';
  search: string | any;

  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal> {
    return this.http.get<Deal>(`${this.baseUrl}`);
  }
}
