import { Component } from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSF_workshop2';
  cart= new Map<Item, number>();
  quantity = 0;

  addIntoCart($event:Item){

    if(this.cart.has($event)){
      // @ts-ignore
      this.quantity = this.cart.get($event) + 1;
      this.cart.set($event,this.quantity);
    } else{
      this.cart.set($event,1);
    }
  }

  removeItem(fruit:Item){
    // @ts-ignore
    if(this.cart.get(fruit)<=1){
      this.cart.delete(fruit)
    } else{
      // @ts-ignore
      this.quantity = this.cart.get(fruit) - 1;
      this.cart.set(fruit,this.quantity);
    }
  }
}
