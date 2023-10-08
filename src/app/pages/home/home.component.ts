import { Component, OnInit, ElementRef, NgZone} from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as flickity from 'flickity';
import 'flickity-as-nav-for'
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

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

  emailValid = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,25})$/;
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

  constructor(
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private router: Router,
    private zone: NgZone,
    private elementRef: ElementRef,
    private emailService: EmailService
  ) { 
    
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
      "autoPlay": false, 
      "prevNextButtons": false,
      "asNavFor": '.carousel-main'
    });

    new flickity(this.elementRef.nativeElement.querySelector('.carousel-main'), {
      "pageDots": false,
       "prevNextButtons": true, 
      "autoPlay": false, 
       "adaptiveHeight": false,
       setGallerySize: true
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

  // aa(){
  //   gsap.registerPlugin(ScrollTrigger);
  //   let sections = gsap.utils.toArray(".panel");

  //   let scrollTween = gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none", // <-- IMPORTANT!
  //     duration: 0.1,
  //     opacity:1,
  //     autoAlpha:1,
  //     scrollTrigger: {
  //       trigger: ".pin-space",
  //       pin: true,
  //       scrub: 1,
  //       start: "top -18%",
  //       pinSpacing: true, 
  //       end: "bottom 0% ",
  //       //snap: directionalSnap(1 / (sections.length - 1)),
  //     }
  //   });
  // }
  

  async sendEmail(){

    const emailData = {
      to: 'info@hkbt.tech',
      subject: 'Contact Us',
      name: this.contactForm.username,
      email: this.contactForm.email,
      phoneNumber: this.contactForm.phoneNumber,
      message: this.contactForm.message
    };

    this.emailService.sendEmail(emailData).subscribe(response => {
      
     this.contactForm = {
        username: '',
        email: '',
        phoneNumber:'',
        selectInquries:  '1',
        message: ''
      }
      
    });

  }






  ngAfterViewInit() {
      this.loadcarousel()
  }

 

  


  ngOnInit(): void {
      
  }

}
