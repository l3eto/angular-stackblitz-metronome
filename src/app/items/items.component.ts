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
  items: Item[] = [];
  displayedColumns: string[] = ['id', 'title'];
  isLoadingResults = true;
  
  ngOnInit() {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data.items;
      this.isLoadingResults = false;
    });
  }

}
