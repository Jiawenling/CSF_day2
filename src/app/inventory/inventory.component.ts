import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from "../item";



@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})


export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() itemToAdd = new EventEmitter<Item>();

  items: Item[] = [

    {
      name: 'Apple',
      image: 'assets/apple.jpg'
    },
    {
      name: 'Orange',
      image: 'assets/orange.jpg'
    },
    {
      name: 'Grape',
      image: 'assets/grape.jpg'
    },
    {
      name: 'Pineapple',
      image: 'assets/pineapple.jpg'
    }
  ];

 addItem(product:Item){
  this.itemToAdd.emit(product)
 }



}
