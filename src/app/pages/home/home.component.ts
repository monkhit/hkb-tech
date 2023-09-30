import { Component, OnInit, HostListener, AfterViewInit, ElementRef, NgZone} from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';
import * as flickity from 'flickity';
import 'flickity-as-nav-for'
import { Location } from '@angular/common';
import sectorDetails from '../../../assets/json/sector.json'
import teamDetails from '../../../assets/json/team.json'
import industries from '../../../assets/json/industries.json'
import news from '../../../assets/json/news.json'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  videoSource = './assets/video/intro.mp4'
  aboutBg = './assets/video/about.mp4'

  sectors: any = sectorDetails;
  team: any = teamDetails;
  industries: any = industries
  news: any = news

  contactForm = {
    username: '',
    email: '',
    phoneNumber:'',
    selectInquries:  '1',
    message: ''
  }

  inquires = [
    {name:'Client Opportunities', id: '1'},
    {name:'Partners Opportunities', id: '2'},
  ]  

  
  contactDetails = [
    {
      heading: 'Client Opportunities',
      description: 'Interested in our services? Know how our services can help your business.',
      id: '1'
    },

    {
      heading: 'Partners Opportunities',
      description: 'Interested in partnering with us? Learn how we can collaborate.',
      id: '2'
    },


  ]

  partners = [
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},

   

  ]




  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private elementRef: ElementRef
  ) { 
    // window.addEventListener('popstate', () => {
    //   location.reload();
    // });
   }


  activeInquiry(item:any){
    this.contactForm.selectInquries = item.id
  }


  loadcarousel(){
    this.zone.runOutsideAngular(() => {
    new flickity(this.elementRef.nativeElement.querySelector('.partners'), {
      "prevNextButtons": false, 
      "contain": true, 
      "autoPlay": true, 
      "pageDots": false,
    });
  })

    new flickity(this.elementRef.nativeElement.querySelector('.services'), {
      "prevNextButtons": true, 
      "contain": true, 
      "groupCells": 1 , 
      "autoPlay": false, 
      "pageDots": false
    });

    new flickity(this.elementRef.nativeElement.querySelector('.sector-navigation'), {
      "contain": true, 
      "pageDots": false, 
      "prevNextButtons": false,
      "asNavFor": '.carousel-main'
    });

    new flickity(this.elementRef.nativeElement.querySelector('.carousel-main'), {
      "pageDots": false,
       "prevNextButtons": false, 
       "adaptiveHeight": true
    });

    
   

  }





  async navigate(item:any, id:any){

    const navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      state: {
        details: item,

      }
    };

    this.router.navigate(['/blog'], navigationExtras);

  }

  


  ngAfterViewInit() {
      this.loadcarousel()
  }
  


  ngOnInit(): void {
   
  }

}
