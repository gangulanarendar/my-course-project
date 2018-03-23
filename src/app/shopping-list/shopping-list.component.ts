import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/Ingrident.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 // providers :[ShoppingService]
})
export class ShoppingListComponent implements OnInit {

  ingridents :Ingrident[];
  // =[new Ingrident('coke',2),new Ingrident('tomoto',10)];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.ingridents=this.shoppingService.getIngridents();
    this.shoppingService.ingridentsChanged.subscribe((ingridents :Ingrident[])=>{
      this.ingridents=ingridents;
    });
  }

  // onIngridentAdded(event:Ingrident)
  // {
  //   console.log('onIngridentAdded',event);
  //   this.ingridents.push(event);
  // }

}
