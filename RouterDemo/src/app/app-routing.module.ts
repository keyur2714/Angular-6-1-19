import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path : 'home' , component: HomeComponent},
  {path : 'products' , component: ProductsComponent},
  {path : 'contact-us' , component: ContactUsComponent},
  {path : 'aboutus' , component: AboutUsComponent},
  {path : 'product-detail/:id' , component: ProductDetailComponent},
  {path : '**' , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
