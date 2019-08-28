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
  mainImages: MainCarouselModel[];
  options = { fullWidth: true, indicators: false };
  options2 = { responsiveThreshold: 0 };
  mainLazyImage = "https://picsum.photos/id/777/12/8";

  constructor(private mainCarouselItemsService: MainCarouselItemsService) {}

  ngOnInit() {
    this.getMainCarouselItems();
    $("#mainCarouselNext").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $("#mainCarousel").carousel("next");
    });

    // move prev carousel
    $("#mainCarouselPrev").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      $("#mainCarousel").carousel("prev");
    });
  }
  ngAfterViewInit() {
    var elems = document.querySelectorAll("#mainCarousel");
    var instances = M.Carousel.init(elems, this.options);
    // var elems2 = document.querySelectorAll(".parallax");
    // var instances2 = M.Parallax.init(elems2, this.options2);
  }
  getMainCarouselItems(): void {
    this.mainImages = this.mainCarouselItemsService.getMainCarouselItems();
  }
}
