import { Component, OnInit } from '@angular/core';
import { ItemService }  from './../item.service';
import { Item } from './../item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  /*styles: [`h1 { font-family: Lato; }`]*/
})
export class ItemsComponent implements OnInit {
  
  constructor(private itemService: ItemService) {}
  items: Item[];
  
  ngOnInit() {
    this.itemService.getItems().subscribe(data => this.items = data.items);
  }

}
