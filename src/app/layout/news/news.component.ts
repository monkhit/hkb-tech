import { Component, ElementRef, NgZone } from '@angular/core';
import news from "../../../assets/json/news.json";
import * as flickity from "flickity";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  news: any = news;

  constructor(
    private zone: NgZone,
    private elementRef: ElementRef,
  ) {}


  openlink(url: any) {
    window.open(url, "_blank");
  }

  
  loadcarousel() {
    new flickity(this.elementRef.nativeElement.querySelector(".news"), {
      prevNextButtons: true,
      contain: false,
      groupCells: true,
      autoPlay: false,
      adaptiveHeight: true,
      pageDots: false,
    });
  }

  ngAfterViewInit() {
    this.loadcarousel();
  }

}
