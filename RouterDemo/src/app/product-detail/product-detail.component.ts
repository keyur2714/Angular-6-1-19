import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId : number = 0;

  constructor(private location:Location,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params)=>{
    //     console.log(params.id);
    //     this.productId = params.id;
    //   }
    // )
    this.activatedRoute.paramMap.subscribe(
      (paramsMap)=>{
        console.log(paramsMap);
        this.productId = parseInt(paramsMap.get("id"));
      }
    )
    // this.activatedRoute.queryParams.subscribe(
    //   (queryParamas)=>{
    //     console.log(queryParamas.productName);
    //     console.log(queryParamas.price);
    //   }
    // )
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        console.log(queryParamMap.get("productName"));
        console.log(queryParamMap.get("price"));
      }
    )
  }

  back():void{
    this.location.back();
  }

}
