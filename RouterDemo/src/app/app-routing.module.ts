import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product/products/products.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path : 'home' , component: HomeComponent},  
  {path : 'contact-us' , component: ContactUsComponent},
  {path : 'aboutus' , component: AboutUsComponent},    
  { 
    path:'products',         
    loadChildren: './product/product.module#ProductModule'
  }
  // },
  // {
  //   path : 'products' , component: ProductListComponent,
  //   children : [{
  //     path : 'product-detail/:id' , component : ProductDetailComponent
  //   }]  
  // }    
  ,
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App Routing Module Loaded...");
  }
}
