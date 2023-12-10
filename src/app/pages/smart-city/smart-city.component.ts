import { Component, ElementRef, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';


@Component({
  selector: 'app-smart-city',
  templateUrl: './smart-city.component.html',
  styleUrls: ['./smart-city.component.scss']
})
export class SmartCityComponent {

  typewriterText = 'HKB Tech';
  typewritersubText= 'Smart City'

  videoSource = "./assets/images/smart-city/Smart-City.mp4";
  caseStudyPage= 'SMARTCITY';
  webContent: any;
  activeTab = 0;



  constructor(
    public translate: TranslateService,
    public serviceProvider: CommonserviceService
  ) {

  }

  async getwebContent(){
    const url ='../assets/json/smart-city/smartcity-home.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.webContent = response
        console.log(response)
      }
      })
  }

  activateTab(index: number): void {
    console.log(index);
    this.activeTab = index;
  }

//   getTyped(){
//     const options: Typed.Options = {
//       strings: ['Hello, this is a typewriter effect in Angular!'],
//       typeSpeed: 50, // typing speed in milliseconds
//       showCursor: true, // display cursor
//       cursorChar: '|', // cursor character
//   }
//   const typed = new Typed(this.typewriterElement.nativeElement, options);
// }


 

 async ngOnInit() {
  await this.getwebContent()
  // this.getTyped()
  }


}
