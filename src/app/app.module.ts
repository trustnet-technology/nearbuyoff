import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SliderComponent } from "./slider/slider.component";
import { FormsModule } from "@angular/forms";
import { CardSliderComponent } from "./card-slider/card-slider.component";
import { FooterComponent } from "./footer/footer.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { OtherCardsComponent } from "./other-cards/other-cards.component";
import { CardComponent } from "./card/card.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";
import { AgmCoreModule } from "@agm/core";
import { SearchComponentComponent } from "./search-component/search-component.component";
import { RatingComponent } from "./rating/rating.component";
import { ShareModule } from "@ngx-share/core";
import { AgmDirectionModule } from "agm-direction";
import { OtpService } from "./services/otp.service";
import {
  LazyLoadImageModule,
  intersectionObserverPreset
} from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";
import { LoginSignupComponent } from "./login-signup/login-signup.component";
import { CustomerOrdersComponent } from "./customer-orders/customer-orders.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { CartComponent } from "./cart/cart.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { Ng5SliderModule } from "ng5-slider";
import { SubCategoryCardComponent } from './sub-category-card/sub-category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CardSliderComponent,
    FooterComponent,
    MenubarComponent,
    OtherCardsComponent,
    CardComponent,
    ProductDetailComponent,
    VendorDetailComponent,
    SearchComponentComponent,
    RatingComponent,
    LoginSignupComponent,
    CustomerOrdersComponent,
    UserProfileComponent,
    CartComponent,
    ProductGridComponent,
    SubCategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    Ng5SliderModule,
    LazyLoadImageModule.forRoot({ preset: intersectionObserverPreset }),
    AgmCoreModule.forRoot({
      apiKey: "enter API key here"
    }),
    AgmDirectionModule
  ],
  providers: [OtpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
