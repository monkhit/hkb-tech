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
    {name:'Energy'},
    {name:'Esports'},
    {name:'Biotech'},
    {name:'Fintech'},
    {name:'Retail'},
    {name:'Insurance'},
    {name:'Manufacturing'},
    {name:'Fit Tech'},
    {name:'Banking'},
    {name:'Healthcare'},
    {name:'Life Sciences'},
    {name:'Real Estate'},
    {name:'Public Services'},
    {name:'Logistics'},
    {name:'Education'},
    {name:'Construction'},
    {name:'Gaming'},
    {name:'Tourism'},
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
      name: 'Mr. Hesham Bin Dayel',
      designation: 'Chairman of Board of Directors',
      image: './assets/images/team/Hesham-Bin-Dayel.png'
    },
    {
      name: 'Dr. Khulood Almani',
      designation: 'Chief Executive Officer',
      image: './assets/images/team/Dr.-Khulood-Almani.png'
    },
    // {
    //   name: 'Bill Kanarick',
    //   designation: 'Chief Executive Officer',
    //   image: './assets/images/team/1.webp'
    // },
    // {
    //   name: 'Bill Kanarick',
    //   designation: 'Chief Executive Officer',
    //   image: './assets/images/team/1.webp'
    // },
    // {
    //   name: 'Bill Kanarick',
    //   designation: 'Chief Executive Officer',
    //   image: './assets/images/team/1.webp'
    // },
    // {
    //   name: 'Bill Kanarick',
    //   designation: 'Chief Executive Officer',
    //   image: './assets/images/team/1.webp'
    // }
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


  sectorDetails = [
    {head : 'Our Sector',
    staticContent : 'We specialize in the development of innovative solutions designed to unleash the full potential and value within a wide range of sectors and industries.',
    title: 'Smart City',
    description: ' We expedite the journey toward a more efficient and sustainable future. Our AI-driven solutions enhance grid asset management and forecasting, optimize energy efficiency, elevate customer service, and yield remarkable business value. Come join us in crafting a greener future and harnessing the power of AI in the energy sector.',
    type1: 'Visual Pollution Detection',
    type2: 'Smart Traffic Management',
    type3: 'Smart Surveillance',
    type4: 'Situational Awareness',
    type5: 'Crowd Management',
    bgImage: '/assets/images/sectors/smartcity.jpeg'
  },

  {head : 'Our Sector',
  staticContent : 'We specialize in the development of innovative solutions designed to unleash the full potential and value within a wide range of sectors and industries.',
  title: 'Energy',
  description: ' We expedite the journey toward a more efficient and sustainable future. Our AI-driven solutions enhance grid asset management and forecasting, optimize energy efficiency, elevate customer service, and yield remarkable business value. Come join us in crafting a greener future and harnessing the power of AI in the energy sector.',
  type1: 'Visual Pollution Detection',
  type2: 'Smart Traffic Management',
  type3: 'Smart Surveillance',
  type4: 'Situational Awareness',
  type5: 'Crowd Management',
  bgImage: '/assets/images/sectors/energy.jpeg'
},

{head : 'Our Sector',
staticContent : 'We specialize in the development of innovative solutions designed to unleash the full potential and value within a wide range of sectors and industries.',
title: 'Esports',
description: ' We expedite the journey toward a more efficient and sustainable future. Our AI-driven solutions enhance grid asset management and forecasting, optimize energy efficiency, elevate customer service, and yield remarkable business value. Come join us in crafting a greener future and harnessing the power of AI in the energy sector.',
type1: 'Visual Pollution Detection',
type2: 'Smart Traffic Management',
type3: 'Smart Surveillance',
type4: 'Situational Awareness',
type5: 'Crowd Management',
bgImage: '/assets/images/sectors/esports.jpeg'
},

{head : 'Our Sector',
staticContent : 'We specialize in the development of innovative solutions designed to unleash the full potential and value within a wide range of sectors and industries.',
title: 'Biotech',
description: ' We expedite the journey toward a more efficient and sustainable future. Our AI-driven solutions enhance grid asset management and forecasting, optimize energy efficiency, elevate customer service, and yield remarkable business value. Come join us in crafting a greener future and harnessing the power of AI in the energy sector.',
type1: 'Visual Pollution Detection',
type2: 'Smart Traffic Management',
type3: 'Smart Surveillance',
type4: 'Situational Awareness',
type5: 'Crowd Management',
bgImage: '/assets/images/sectors/biotech.jpeg'
},

{head : 'Our Sector',
staticContent : 'We specialize in the development of innovative solutions designed to unleash the full potential and value within a wide range of sectors and industries.',
title: 'Fintech',
description: ' We expedite the journey toward a more efficient and sustainable future. Our AI-driven solutions enhance grid asset management and forecasting, optimize energy efficiency, elevate customer service, and yield remarkable business value. Come join us in crafting a greener future and harnessing the power of AI in the energy sector.',
type1: 'Visual Pollution Detection',
type2: 'Smart Traffic Management',
type3: 'Smart Surveillance',
type4: 'Situational Awareness',
type5: 'Crowd Management',
bgImage: '/assets/images/sectors/fintech.jpeg'
},

{head : 'Our Sector',
staticContent : 'We specialize in the development of innovative solutions designed to unleash the full potential and value within a wide range of sectors and industries.',
title: 'Retail',
description: ' We expedite the journey toward a more efficient and sustainable future. Our AI-driven solutions enhance grid asset management and forecasting, optimize energy efficiency, elevate customer service, and yield remarkable business value. Come join us in crafting a greener future and harnessing the power of AI in the energy sector.',
type1: 'Visual Pollution Detection',
type2: 'Smart Traffic Management',
type3: 'Smart Surveillance',
type4: 'Situational Awareness',
type5: 'Crowd Management',
bgImage: '/assets/images/sectors/retail.jpeg'
},



  ]





  constructor() { }


  activeInquiry(item:any){
    this.contactForm.selectInquries = item.id
  }


  ngOnInit(): void {
  }

}
