import { NgModule } from '@angular/core';
import { ProductListComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations : [
        ProductListComponent,
        ProductDetailComponent
    ],
    imports : [
        CommonModule,
        ProductRoutingModule
    ],
    exports : [ ],
    providers : []
})
export class ProductModule {
    constructor(){
        console.log("Product Module Loaded...");
    }
}