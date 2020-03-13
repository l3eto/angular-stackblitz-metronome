import { Component, OnInit } from '@angular/core';
import { ItemService }  from './../item.service';
import { Item } from './../item';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'items',
  templateUrl: './item.component.html',
  /*styles: [`h1 { font-family: Lato; }`]*/
})

export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}
  item: Item;isLoadingResults = true;
  
  ngOnInit() {
    this.itemService.getItem("").subscribe(data => this.item = data.item);
  }

}