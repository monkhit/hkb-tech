import { Component, OnInit, ElementRef } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';
import {
  NavigationExtras,
  ActivatedRoute,
  Router,
  NavigationStart,
} from "@angular/router";
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language: any = null;


  services: any;
  industries: any 
  
    MenuItems = [
         {name: 'ABOUT',  id:'about'},
         {name: 'SERVICES',   class: '',  id:'services'},
         {name: 'INDUSTRIES',  class: '', id:'sector'},
         {name: 'BLOGS',  class: '', id:'blog'},
         {name: 'CONTACT US',  class: '', id:'contact'},
         {name: 'Smart City',  class: '', id:'contact'},
    ]
         


  constructor(
    public events: EventsService,
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceProvider: CommonserviceService
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


 async navigate(item: any, id: any, type: any) {
  console.log(item)
  const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
  navbarToggler.click();
  
  const navigationExtras: NavigationExtras = {
    relativeTo: this.activatedRoute,
    queryParams: {type: item.title},
    state: {
      details: item,
    },
  };

  if (type === "B") {
    this.router.navigate(["/blog"], navigationExtras);
  } else if (type === "I") {
    this.router.navigate(["/industries"], navigationExtras );
  }
  else if (type === "S") {

    if(item.Dpage === true){
    this.router.navigate(["/conversational-ai"], navigationExtras );
    }
    else{
      this.router.navigate(["/services"], navigationExtras );
    }


  }

  else if(type === "C"){
    this.router.navigate(["/smart-city"] );
  }



}


  switchlang(lang:any){
    window.location.reload();

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


  async ngOnInit() {
    this.language = localStorage.getItem('lang');
    this.services = await this.serviceProvider.getlocalStorage('Servcies')
    this.industries = await this.serviceProvider.getlocalStorage('Industries')

  }

}
