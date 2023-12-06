import { Component, OnInit, ElementRef, NgZone } from "@angular/core";
import {
  NavigationExtras,
  ActivatedRoute,
  Router,
  NavigationStart,
} from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import * as flickity from "flickity";
import "flickity-as-nav-for";
import { CommonserviceService } from "src/app/service/commonservice.service";
import industriesDetails from "../../../assets/json/industries/industries.json";
// import serviceDetails from "../../../assets/json/services/services.json";
import { EmailService } from "src/app/service/email-service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss",  "mobile.scss"],
})
export class HomeComponent implements OnInit {
  emailValid =
    /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,25})$/;
  videoSource = "./assets/video/intro.mp4";

  // industries: any = industriesDetails;
  // services: any =  serviceDetails;

  services: any;
  industries: any

contactForm = {
username: "",
email: "",
phoneNumber: "",
selectInquries: "1",
message: "",
};

inquires = [
  { name: "Client Opportunities", id: "1" },
  { name: "Partners Opportunities", id: "2" },
];

contactDetails = [
{
heading: "Client Opportunities",
description:
  "Interested in our services? Know how our services can help your business.",
id: "1",
},

{
heading: "Partners Opportunities",
description:
  "Interested in partnering with us? Learn how we can collaborate.",
id: "2",
},
];

  constructor(
    private serviceProvider: CommonserviceService,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService,
    private router: Router,
    private zone: NgZone,
    private elementRef: ElementRef,
    private emailService: EmailService,
  ) {}

  activeInquiry(item: any) {
    this.contactForm.selectInquries = item.id;
  }

  loadcarousel() {
   
    new flickity(this.elementRef.nativeElement.querySelector(".services"), {
      prevNextButtons: true,
      contain: true,
      groupCells: 1,
      autoPlay: false,
      pageDots: false,
    });

    new flickity(
      this.elementRef.nativeElement.querySelector(".sector-navigation"),
      {
        contain: true,
        pageDots: false,
        autoPlay: false,
        prevNextButtons: false,
        asNavFor: ".carousel-main",
      }
    );

    new flickity(
      this.elementRef.nativeElement.querySelector(".carousel-main"),
      {
        pageDots: false,
        prevNextButtons: true,
        autoPlay: false,
        adaptiveHeight: false,
        setGallerySize: true,
      }
    );


  }

  async navigate(item: any, id: any, type: any) {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      queryParams: {type: item.title},
      state: {
        details: item,
      },
    };

    if (type === "I") {
      this.router.navigate(["/industries"], navigationExtras);
    }
    else if(type === "S"){
      this.router.navigate(["/services"], navigationExtras);
    }
  }


  async getServices(){
  const url ='../assets/json/services/services.json'
  this.serviceProvider.getWebService(url).subscribe({
    next: async (response: any) => {
      // console.log(response);
      this.services = response
      localStorage.setItem('Servcies', JSON.stringify(response))
    }
    })
}

async getindustries(){
  const url ='../assets/json/industries/industries.json'
  this.serviceProvider.getWebService(url).subscribe({
    next: async (response: any) => {
      this.industries = response
      
      localStorage.setItem('Industries', JSON.stringify(response))
    }
    })
}

  async sendEmail() {
    const emailData = {
      to: "info@hkbt.tech",
      subject: "Contact Us",
      name: this.contactForm.username,
      email: this.contactForm.email,
      phoneNumber: this.contactForm.phoneNumber,
      message: this.contactForm.message,
    };

    this.emailService.sendEmail(emailData).subscribe((response) => {
      this.contactForm = {
        username: "",
        email: "",
        phoneNumber: "",
        selectInquries: "1",
        message: "",
      };
    });
  }


  ngAfterViewInit() {
    setTimeout(async() => {
      this.loadcarousel();
    }, 1000);
  }

 async ngOnInit()  {
  await this.getServices()
  await this.getindustries()
 }
}
