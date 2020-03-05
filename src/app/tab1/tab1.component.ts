import { Component, OnInit } from '@angular/core';

import { ItemService }  from './../item.service';
import { Item } from './../item';

@Component({
  selector: 'tab1',
  templateUrl: './tab1.component.html',
  /*styles: [`h1 { font-family: Lato; }`]*/
})
export class Tab1Component  implements OnInit {
  /*@Input() name: string;*/

  constructor(private itemService: ItemService) {}
  
  ngOnInit() {
    this.itemService.getItems()
      .subscribe((data: Item) => this.items = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
      });
  }

}
