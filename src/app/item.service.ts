
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Item } from './item';

@Injectable({
  providedIn: 'root',
})

export class ItemService {
  constructor(private http: HttpClient) { }
  url = 'https://www.mocky.io/v2';

  getItems() {
    return this.http.get(`${this.url}/5e61259e33000077ce97c00e`);
  }

  getItem(id) {
    return this.http.get(`${this.url}/5e61281b3300005c3997c02e`);
  }


} 