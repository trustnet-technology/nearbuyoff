import { Injectable } from "@angular/core";
import { MainCarouselModel } from "../models/mainCarouselModel";
import { MAINCAROUSELITEMS } from "../data/mainCarouselItems";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MainCarouselItemsService {
  constructor() {}

  getMainCarouselItems(): MainCarouselModel[] {
    return MAINCAROUSELITEMS;
  }
}
