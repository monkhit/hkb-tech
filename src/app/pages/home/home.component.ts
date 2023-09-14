import { Component, OnInit } from '@angular/core';
import sectorDetails from '../../../assets/json/sector.json'
import teamDetails from '../../../assets/json/team.json'
import industries from '../../../assets/json/industries.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoSource = './assets/video/intro.mp4'
  sectors: any = sectorDetails;
  team: any = teamDetails;
  industries: any = industries


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






  constructor() { 
    console.log(this.sectors)
  }


  activeInquiry(item:any){
    this.contactForm.selectInquries = item.id
  }


  ngOnInit(): void {
  }

}
