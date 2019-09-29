import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css";
import { MainCarouselModel } from "../models/mainCarouselModel";
import { MainCarouselItemsService } from "../services/main-carousel-items.service";
declare var $: any;
@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  mainImages: (string | MainCarouselModel)[] = [
    {
      url: "../../assets/madridsubzi.jpg",
      href: "/category/GROC",
      title: "Grocery"
    },
    { url: "../../assets/lassi.jpg", href: "/category/GROC", title: "Grocery" },
    { url: "../../assets/troll.jpg", href: "/category/GROC", title: "Grocery" },
    { url: "../../assets/clocks.jpg", href: "/category/DECO", title: "Decors" },
    {
      url: "../../assets/shirtssat.jpg",
      href: "/category/APPA",
      title: "Apparels"
    }
  ];
  options = { fullWidth: true, indicators: false, height: 300 };
  options2 = { responsiveThreshold: 0 };
  mainLazyImage = "https://picsum.photos/id/777/12/8";

  constructor(private mainCarouselItemsService: MainCarouselItemsService) {}

  ngOnInit() {
    // this.getMainCarouselItems();
  }
  ngAfterViewInit() {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, this.options);
    // var elems2 = document.querySelectorAll(".parallax");
    // var instances2 = M.Parallax  .init(elems2, this.options2);
  }
  // getMainCarouselItems(): void {
  //   this.mainImages = this.mainCarouselItemsService.getMainCarouselItems();
  // }
}
