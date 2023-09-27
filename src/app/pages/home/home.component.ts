import { Component, OnInit, HostListener} from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';
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
  @HostListener('click', ['$event'])

  onClick(event: Event) {
    event.preventDefault(); // Prevent the default behavior (page navigation) 
    const target = event.target as HTMLElement;
    const sectionId = target.getAttribute('href')?.substring(1); // Extract the sectionId from the href
      console.log(sectionId)
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }


  videoSource = './assets/video/intro.mp4'
  aboutBg = './assets/video/about.mp4'

  sectors: any = sectorDetails;
  team: any = teamDetails;
  industries: any = industries
  news: any = news


  // https://www.shutterstock.com/shutterstock/videos/1054883390/preview/stock-footage-digital-circuit-network-loop-endless-flight-through-a-huge-digital-network-of-data-and-circuitry.webm

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
    {name:'General Inquries', id: '3'},
  ]  

  
  contactDetails = [
    {
      heading: 'Client Opportunities',
      description: 'Interested in our solutions? Learn how our solutions can help your business',
      id: '1'
    },

    {
      heading: 'Partners Opportunities',
      description: 'Want to explore collaboration opportunities? Join us in Shaping the Future',
      id: '2'
    },

    {
      heading: 'General Inquiries',
      description: 'Got any other question? please contact us here',
      id: '3'
    },

  ]

  partners = [
    {"url": "/assets/images/partners/frogparking.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/logo_digiconnect_fluves.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/5.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/4.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/Wolters-Kluwer-Enablon.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/2.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/7.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/logo_digiconnect_fluves.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/5.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},
    {"url": "https://www.aigcom.com/wp-content/themes/Arificial%20Intelligence/assets/img/partner/SkylarkLogoTransparent.png"},

  ]






  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { 

    window.addEventListener('popstate', () => {
      location.reload();
    });

  
   }


  activeInquiry(item:any){
    this.contactForm.selectInquries = item.id
  }







  async navigate(item:any, id:any){

    const navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      queryParams: { id: id},
      state: {
        details: item,

      }
    };

    this.router.navigate(['/news'], navigationExtras);

  }

  

  


  ngOnInit(): void {
   
  }

}
