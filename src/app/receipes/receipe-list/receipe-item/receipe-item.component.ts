import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Receipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe:Receipe;
  @Output() selectReceipeEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectReceipeItem()
  {
    console.log('event');
    
    this.selectReceipeEvent.emit();
  }

}
