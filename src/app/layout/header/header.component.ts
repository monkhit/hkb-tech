import { Component, OnInit, ElementRef } from '@angular/core';
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
        //  {name: 'PARTNER',  class: '', id:'team'},
         {name: 'BLOGS',  class: '', id:'blog'},
         {name: 'CONTACT US',  class: '', id:'contact'},
    ]
         


  constructor(
    public events: EventsService,
    private elementRef: ElementRef,
  ) { }



  closeNavbar() {
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
      // Check if the mobile navbar collapse is open
      if (navbarCollapse.classList.contains('show')) {
        // Click the navbar toggler to close the collapse
        navbarToggler.click();
      }
    }

 }


  switchlang(lang:any){
    
    if (this.language !== localStorage.getItem('lang')){
      this.events.publish('language:languageChanged', this.language);
    }
    const htmlSelect: any  = document.querySelector("html");
    
    if(this.language = lang === 'en'){
      htmlSelect.setAttribute("dir", "ltr");
      htmlSelect.setAttribute("lang", "en");
      localStorage.setItem('lang', 'en')
      this.language = localStorage.getItem('lang');

     }else{
      htmlSelect.setAttribute("dir", "rtl");
      htmlSelect.setAttribute("lang", "ar");
      localStorage.setItem('lang', 'ar')
      this.language = localStorage.getItem('lang');
      
     }

  }


  ngOnInit(): void {
    this.language = localStorage.getItem('lang');
  }

}
