import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Receipe} from '../receipe.model';


@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
   receipes:Receipe[] = [new Receipe('Popcorn','Popcorn @80','https://www.kfc.com/assets/chicken_share/KFC_ChknShareBuckets_InSit_7746_-3d61acc7490b949ca338d2b26b748e6885f5b395ebc0f147aa95d464378f09ba.jpg')
   ,new Receipe('KFC Meal','KFC Meal @222','https://www.kfc.com/assets/products/KFC-combo-meal-Enviro-05f226f14f5ebeb71801be05a940ec0e164a6b07fd7595125a3b290cb380a610.jpg')
  , new Receipe('Veg Corn ','Corn @60','https://www.kfc.com/assets/products/G15022_KFC_19-corn-Enviro_0289_RGB-copy-b33ef1f906adcf3c1d7d93d1ed29be6d683d8790df0f711f53a7f91cdd2aec37.jpg')];
  
  @Output() onReceipeSelectedEvent=new EventEmitter<Receipe>();

  constructor() { }

  ngOnInit() {
  }


  onReceipeSelection(receipe :Receipe)
  {
    this.onReceipeSelectedEvent.emit(receipe);
    console.log('In ReceipeListComponent',receipe);
  }


}
