import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoSource = './assets/video/intro.mp4'
  // https://www.shutterstock.com/shutterstock/videos/1054883390/preview/stock-footage-digital-circuit-network-loop-endless-flight-through-a-huge-digital-network-of-data-and-circuitry.webm
  
  sectors = [
    {name:'Smart City'},
    {name:'Fintech'},
    {name:'Insurance'},
    {name:'Manufacturing'},
    {name:'Fit Tech'},
    {name:'Banking'},
    {name:'Healthcare'},
    {name:'Life Sciences'},
    {name:'Energy'},
    {name:'Real Estate'},
    {name:'Retail'},
    {name:'Public Services'},
    {name:'Logistics'},
    {name:'Education'},
    {name:'Construction'},
    {name:'Gaming'},
    {name:'Tourism'},
    {name:'Esports'},
  ]





  constructor() { }


  ngOnInit(): void {
  }

}
