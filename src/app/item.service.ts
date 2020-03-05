
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) { }
  url = 'http://www.mocky.io/v2';
  getCharacters() {
    return this
            .http
            .get(`${this.url}/5e60ddce3300005fcc97bce5`);
  }
}