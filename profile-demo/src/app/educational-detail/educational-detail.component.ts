import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educational-detail',
  templateUrl: './educational-detail.component.html',
  styleUrls: ['./educational-detail.component.css']
})
export class EducationalDetailComponent implements OnInit {

  education1 = {
    std: "SSC",
    per: 72.14,
    year: 2001
  };

  education2 = {
    std: "HSC",
    per: 66.55,
    year: 2003
  };

  education3 = {
    std: "BTech IT",
    per: 60.59,
    year: 2007
  };

  education4 = {
    std: "ME",
    per: 65.00,
    year: 2009
  };

  std: string = '';
  per: number = 0.0;

  constructor() { }

  ngOnInit() {
  }

}
