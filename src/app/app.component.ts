import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedOption:string='receipe';


  onFeatureSelected(event)
  {
    console.log('onFeatureSelected :',event);
    this.selectedOption=event;

  }
}
