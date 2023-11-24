import { Component, OnInit } from '@angular/core';
import industriesDetails from "../../../assets/json/industries.json";
import serviceDetails from "../../../assets/json/services.json";
import { EmailService } from 'src/app/service/email-service';

import {
  NavigationExtras,
  ActivatedRoute,
  Router,
  NavigationStart,
} from "@angular/router";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailValid = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,25})$/;
  services: any = serviceDetails
  industries: any = industriesDetails
  siteUrl: any;
  email= '';

  jumpSection = [
    {name: 'About',  class: 'active', id:'about'},
    {name: 'Services',   class: '',  id:'services'},
    {name: 'Industries',  class: '', id:'sector'},
    {name: 'Partner',  class: '', id:'team'},
    {name: 'News',  class: '', id:'news'},
  ]

  constructor(
    private emailService: EmailService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    const url = window.location.href;
    this.siteUrl = url.slice(0, url.lastIndexOf('/'))
  }

  subscribe(){

    const emailData = {
      to: 'info@hkbt.tech',
      subject: 'Subscribe',
      email: this.email,
      name: '',
      phoneNumber: '',
      message: ''
    };

    this.emailService.sendEmail(emailData).subscribe(response => {
      console.log(response); // Handle the response here
      this.email = ''
    });

  }



  async navigate(item: any, id: any, type: any) {
    console.log(item)
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



 

  ngOnInit(): void {
  }

}
