import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoSource = './assets/video/intro.mp4'
  // https://www.shutterstock.com/shutterstock/videos/1054883390/preview/stock-footage-digital-circuit-network-loop-endless-flight-through-a-huge-digital-network-of-data-and-circuitry.webm
  sectors = [
    {name:'Smart City'},
    {name:'Fintech'},
    {name:'Insurance'},
    {name:'Manufacturing'},
    {name:'Fit Tech'},
    {name:'Banking'},
    {name:'Healthcare'},
    {name:'Life Sciences'},
    {name:'Energy'},
    {name:'Real Estate'},
    {name:'Retail'},
    {name:'Public Services'},
    {name:'Logistics'},
    {name:'Education'},
    {name:'Construction'},
    {name:'Gaming'},
    {name:'Tourism'},
    {name:'Esports'},
  ]

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

  teamDetails = [
    {
      name: 'Bill Kanarick',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/1.webp'
    },
    {
      name: 'Bill Kanarick',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/1.webp'
    },
    {
      name: 'Bill Kanarick',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/1.webp'
    },
    {
      name: 'Bill Kanarick',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/1.webp'
    },
    {
      name: 'Bill Kanarick',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/1.webp'
    },
    {
      name: 'Bill Kanarick',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/1.webp'
    }
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





  constructor() { }


  activeInquiry(item:any){
    this.contactForm.selectInquries = item.id
  }


  ngOnInit(): void {
  }

}
