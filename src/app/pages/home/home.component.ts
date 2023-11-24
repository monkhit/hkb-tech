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
import industriesDetails from "../../../assets/json/industries.json";
import serviceDetails from "../../../assets/json/services.json";
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

  industries: any = industriesDetails;
  services: any = serviceDetails;


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
    this.loadcarousel();
  }

  ngOnInit(): void {}
}
