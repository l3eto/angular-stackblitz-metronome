
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})

export class ItemService {
  constructor(private http: HttpClient) { }
  url = 'https://www.mocky.io/v2';

  getItems() {
    return this.http.get<Item>(`${this.url}/5e6123993300007a5a97c002`);
  };


} 