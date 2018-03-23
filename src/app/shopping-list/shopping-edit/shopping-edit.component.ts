import { Component, Output,OnInit ,ViewChild, ElementRef, EventEmitter} from '@angular/core';
import { Ingrident } from '../../shared/Ingrident.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
 // @Output() ingridentAdded =new EventEmitter<Ingrident>();

  onAddItem()
  {
    console.log('ding'+this.nameInputRef.nativeElement.value);
    console.log('ding'+this.amountInputRef.nativeElement.value);
    this.shoppingService.addIngridents(new Ingrident(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
   // this.ingridentAdded.emit(new Ingrident(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
  }
}
