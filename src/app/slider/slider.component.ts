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
  mainLazyImage = "https://picsum.photos/id/777/12/8";
  currentCitySelected: string = "";
  // currentCityLength: number;
  constructor(private mainCarouselItemsService: MainCarouselItemsService) {}

  ngOnInit() {
    this.currentCitySelected = localStorage.getItem("currentCity");
    // this.currentCityLength = this.currentCitySelected.length;
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

    $(document).ready(function() {
      $(".parallax").parallax();
    });
  }
  ngAfterViewInit() {
    var elems = document.querySelectorAll("#mainCarousel");
    var instances = M.Carousel.init(elems, this.options);
  }
  getMainCarouselItems(): void {
    this.mainImages = this.mainCarouselItemsService.getMainCarouselItems();
  }
}
