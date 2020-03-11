import { Component, OnInit } from '@angular/core';

//import { categories } from './categories.mock';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Items',
        items: [
          {
            label: 'Ver', 
            routerLink: ['/items']
          },
          {
            label: 'Nuevo',
            routerLink: ['/item/new']
          }
        ]
      }
    ];
  }
}