import { Component, OnInit } from '@angular/core';
import industries from '../../../assets/json/industries.json'
import sectorDetails from '../../../assets/json/sector.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  sectors: any = sectorDetails;
  industries: any = industries
  siteUrl: any;
  jumpSection = [
    {name: 'ABOUT',  class: 'active', id:'about'},
    {name: 'SERVICES',   class: '',  id:'services'},
    {name: 'INDUSTRIES',  class: '', id:'sector'},
    {name: 'PARTNER',  class: '', id:'team'},
    {name: 'NEWS',  class: ''},
  ]
  constructor() { 
    const url = window.location.href;
    this.siteUrl = url.slice(0, url.lastIndexOf('/'))
  }



 

  ngOnInit(): void {
  }

}
