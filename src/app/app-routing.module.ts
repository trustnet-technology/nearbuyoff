import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";
import { SearchComponentComponent } from "./search-component/search-component.component";
import { SliderComponent } from "./slider/slider.component";

const routes: Routes = [
  { path: "search", component: SearchComponentComponent },
  { path: "home", component: SliderComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "product/:productID", component: ProductDetailComponent },
  { path: "product/:productID/seller", component: VendorDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
