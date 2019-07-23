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
import { SelCityModalComponent } from "./sel-city-modal/sel-city-modal.component";
import { CardComponent } from "./card/card.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { VendorDetailComponent } from "./vendor-detail/vendor-detail.component";
import { AgmCoreModule } from "@agm/core";
import { SearchComponentComponent } from "./search-component/search-component.component";
import { RatingComponent } from "./rating/rating.component";
import { ShareModule } from "@ngx-share/core";
import { OtpService } from "./services/otp.service";
import {
  LazyLoadImageModule,
  intersectionObserverPreset
} from "ng-lazyload-image";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CardSliderComponent,
    FooterComponent,
    MenubarComponent,
    OtherCardsComponent,
    SelCityModalComponent,
    CardComponent,
    ProductDetailComponent,
    VendorDetailComponent,
    SearchComponentComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    LazyLoadImageModule.forRoot({ preset: intersectionObserverPreset }),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCYNp-l4jwhbrjwO6w7rA3s92mv4u5Vwrk"
    })
  ],
  providers: [OtpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
