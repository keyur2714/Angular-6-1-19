import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  getDetail(id:number){
    this.router.navigate(['product-detail',id],{queryParams: {productName: 'TV',price: 20000}})
  }
}
