import {Receipe} from './receipe.model';

import { EventEmitter, Injectable } from '@angular/core';
import { Ingrident } from '../shared/Ingrident.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable()
export class ReceipeService{

    selectReceipeEvent=new EventEmitter<Receipe>();

    private receipes:Receipe[] = [new Receipe('Popcorn',
    'Popcorn @80',
    'https://www.kfc.com/assets/chicken_share/KFC_ChknShareBuckets_InSit_7746_-3d61acc7490b949ca338d2b26b748e6885f5b395ebc0f147aa95d464378f09ba.jpg'
    ,[new Ingrident('meat',1),new Ingrident('fries',20)])
     ,new Receipe('KFC Meal',
     'KFC Meal @222',
     'https://www.kfc.com/assets/products/KFC-combo-meal-Enviro-05f226f14f5ebeb71801be05a940ec0e164a6b07fd7595125a3b290cb380a610.jpg'
     ,[new Ingrident('chicken',1),new Ingrident('pepper',20)])
//    , new Receipe('Veg Corn ','Corn @60','https://www.kfc.com/assets/products/G15022_KFC_19-corn-Enviro_0289_RGB-copy-b33ef1f906adcf3c1d7d93d1ed29be6d683d8790df0f711f53a7f91cdd2aec37.jpg')
];
constructor(private shoppingService:ShoppingService){}
   
   getReceipes()
   {
       return this.receipes.slice();
   }  
   addIngridentstoShoppingListFunction(ingridents:Ingrident[]){
       this.shoppingService.addIngridentsFromRecipe(ingridents);
       


   }
   
}