import { Component, OnInit } from '@angular/core';
import { ItemService }  from './../item.service';
import { Item } from './../item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  constructor(private itemService: ItemService) {}
  items: Item[];
  
  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' }
  ];
    this.itemService.getItems().subscribe(data => this.items = data.items);
  }

}
