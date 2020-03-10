import { Component, OnInit } from '@angular/core';

//import { categories } from './categories.mock';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 // categories: any[] = categories;
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Items',
        icon: '',
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


 /*categories: any[] = [
   {name: 'Items', href: 'items'}
 ];
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }
*/
}