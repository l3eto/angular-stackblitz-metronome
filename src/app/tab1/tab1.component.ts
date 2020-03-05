import { Component, OnInit } from '@angular/core';

import { ItemService }  from './../item.service';
import { Item } from './../item';

@Component({
  selector: 'tab1',
  templateUrl: './tab1.component.html',
  /*styles: [`h1 { font-family: Lato; }`]*/
})
export class Tab1Component  implements OnInit {
  
  constructor(private itemService: ItemService) {}
  items: Item[];  
  
  ngOnInit() {
      this.itemService.getHeroes()
.subscribe(items => this.items = items);
  }

}
