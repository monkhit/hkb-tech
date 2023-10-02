import { Component, OnInit } from '@angular/core';
import industries from '../../../assets/json/industries.json'
import sectorDetails from '../../../assets/json/sector.json'
import { EmailService } from 'src/app/service/email-service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  sectors: any = sectorDetails;
  industries: any = industries
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
    private emailService: EmailService
  ) { 
    const url = window.location.href;
    this.siteUrl = url.slice(0, url.lastIndexOf('/'))
  }

  subscribe(){

    const emailData = {
      to: 'monkhit2023@gmail.com',
      subject: 'Contact Us',
      email: this.email,
    };

    this.emailService.sendEmail(emailData).subscribe(response => {
      console.log(response); // Handle the response here
    });

  }



 

  ngOnInit(): void {
  }

}
