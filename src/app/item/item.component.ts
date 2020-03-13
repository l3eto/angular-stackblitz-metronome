import { Component, OnInit } from '@angular/core';
import { ItemService }  from './../item.service';
import { Item } from './../item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  item: Item;
  isLoadingResults = true;
  constructor(private route: ActivatedRoute, private itemService: ItemService) {}
  
  ngOnInit() {
    this.itemService.getItem(this.route.snapshot.params.id).subscribe((data: any) => {
      this.item = data.item;
      this.isLoadingResults = false;
    });
  }

}