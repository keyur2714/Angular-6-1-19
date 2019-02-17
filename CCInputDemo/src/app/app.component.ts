import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCInputDemo';
  message = 'Good Afternoon...!';

  selectedCountry = '';
  selectedState = '';
  mesaages : string [] = ["Hi","Hello","Bye"];

  stateList : any[]  = [
    {
      code : 'GUJ',
      desc : 'Gujrat'
    },
    {
      code : 'MAH',
      desc : 'Maharashtra'
    },
    {
      code : 'MP',
      desc : 'Madhya Pradesh'
    }
  ];

  countryList : any[] = [
    {
      code : 'IND',
      desc : 'India'
    },
    {
      code : 'US',
      desc : 'United States'
    },
    {
      code : 'UK',
      desc : 'Untied Kingdom'
    }
  ];

  getValue(selectedValue){
    this.selectedCountry = selectedValue;
  }

  getStateValue(selectedVallue){
    this.selectedState = selectedVallue;
  }
}
