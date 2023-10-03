import { Component, OnInit, ElementRef, NgZone} from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';
import * as flickity from 'flickity';
import 'flickity-as-nav-for'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

import sectorDetails from '../../../assets/json/sector.json'
import teamDetails from '../../../assets/json/team.json'
import industries from '../../../assets/json/industries.json'
import news from '../../../assets/json/news.json'
import { EmailService } from 'src/app/service/email-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './about-mobile.scss'],
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
    private elementRef: ElementRef,
    private emailService: EmailService
  ) { 
    
   }


  // @HostListener('wheel', ['$event'])
  // handleWheelEvent(event: WheelEvent) {
  //   // Check if the event target is not an input field (to prevent interference with form inputs)
  //   if (!(event.target instanceof HTMLInputElement)) {
  //     if (event.deltaY > 0) {
  //       new flickity.next();
  //     } else if (event.deltaY < 0) {
  //       new flickity.previous();
  //     }
  //   }
  // }


 


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
       "prevNextButtons": true, 
       "adaptiveHeight": false,
       setGallerySize: true
    });


    // new flickity(this.elementRef.nativeElement.querySelector('.about-mobile'), {
    //   "prevNextButtons": false, 
    //   "contain": true, 
    //   "groupCells": 1 , 
    //   "autoPlay": false, 
    //   "pageDots": false
    // });

    
   

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

  aa(){
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      duration: 1,
      opacity:1,
      autoAlpha:1,
      scrollTrigger: {
        trigger: ".pin-space",
        pin: true,
        scrub: 1,
        start: "top -2%",
        pinSpacing: true, 
        end: "bottom 30% ",
        //snap: directionalSnap(1 / (sections.length - 1)),
      }
    });
  }
  

  sendEmail(){

    const emailData = {
      to: 'monkhit2023@gmail.com',
      subject: 'Contact Us',
      name: this.contactForm.username,
      email: this.contactForm.email,
      phoneNumber: this.contactForm.phoneNumber,
      message: this.contactForm.message
    };

    this.emailService.sendEmail(emailData).subscribe(response => {
      console.log(response); // Handle the response here
    });

  }




  


  ngAfterViewInit() {
      this.loadcarousel()
  }

 

  


  ngOnInit(): void {
    this.aa()
      
  }

}
