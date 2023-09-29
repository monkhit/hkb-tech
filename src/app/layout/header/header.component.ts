import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import industries from '../../../assets/json/industries.json'
import sectorDetails from '../../../assets/json/sector.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: any = null;
  industries: any = industries
  sector: any = sectorDetails
  
    MenuItems = [
         {name: 'ABOUT',  id:'about'},
         {name: 'SERVICES',   class: '',  id:'services'},
         {name: 'INDUSTRIES',  class: '', id:'sector'},
         {name: 'PARTNER',  class: '', id:'team'},
         {name: 'BLOGS',  class: '', id:'blog'},
         {name: 'CONTACT US',  class: '', id:'contact'},
    ]
         


  constructor(
    public events: EventsService,
  ) { }




  switchlang(){
    if (this.language !== localStorage.getItem('lang')){
      this.events.publish('language:languageChanged', this.language);
    }
    const htmlSelect: any  = document.querySelector("html");
    
    if(this.language === 'en'){
      htmlSelect.setAttribute("dir", "ltr");
      htmlSelect.setAttribute("lang", "en");
      
     }else{
      htmlSelect.setAttribute("dir", "rtl");
      htmlSelect.setAttribute("lang", "ar");
      
     }

  }


  ngOnInit(): void {
    this.language = localStorage.getItem('lang');

    console.log(this.sector)
  }

}
