import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/Ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridents :Ingrident[] =[new Ingrident('coke',2),new Ingrident('tomoto',10)];
  constructor() { }

  ngOnInit() {
  }

  onIngridentAdded(event:Ingrident)
  {
    console.log('onIngridentAdded',event);
    this.ingridents.push(event);
  }

}
