import { Component, OnInit } from '@angular/core';
import { ItemService }  from './../item.service';
import { Item } from './../item';

@Component({
  selector: 'items',
  templateUrl: './item.component.html',
  /*styles: [`h1 { font-family: Lato; }`]*/
})

export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) {}
  item: Item;
  
  ngOnInit() {
    this.itemService.getItem().subscribe(data => this.item = data.item);
  }

}