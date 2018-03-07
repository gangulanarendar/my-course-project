import { Component,Output ,EventEmitter} from "@angular/core";


@Component({
 'selector' :'app-header',
 'templateUrl' :'./header.component.html',
 'styleUrls':[]

})
export class HeaderComponent{
    @Output() selectedItem=new EventEmitter<string>();
    constructor(){
    }

    OnSelect(selectedOption){
      console.log('Selected',selectedOption);
      this.selectedItem.emit(selectedOption);
    }
}