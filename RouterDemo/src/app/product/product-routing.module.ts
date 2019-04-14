import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
const routes : Routes = [    
    {
        path : '' , component: ProductListComponent,
        children : [{
          path : 'product-detail/:id' , component : ProductDetailComponent
        }]  
    },
    {path : 'product-detail/:id' , component: ProductDetailComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
    constructor(){
        console.log("Product Routing Module Loaded...");
    }
}