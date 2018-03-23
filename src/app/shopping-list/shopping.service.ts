import { Ingrident } from "../shared/Ingrident.model";
import { EventEmitter } from "@angular/core";

export class ShoppingService{
   ingridentsChanged =new EventEmitter<Ingrident[]>();
   private ingridents :Ingrident[]=[new Ingrident('coke',2),new Ingrident('tomoto',10)]; ;

   getIngridents()
   {
       return this.ingridents.slice();
   }
   addIngridents(ingrident:Ingrident)
   {
       console.log('addIngridents',ingrident);
       this.ingridents.push(ingrident);
       this.ingridentsChanged.emit(this.ingridents.slice());
   }
addIngridentsFromRecipe(ingridents:Ingrident[])
{
    this.ingridents.push(...ingridents);
    this.ingridentsChanged.emit(this.ingridents.slice());
}
}