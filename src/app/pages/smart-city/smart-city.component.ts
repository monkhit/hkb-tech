import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
@Component({
  selector: 'app-smart-city',
  templateUrl: './smart-city.component.html',
  styleUrls: ['./smart-city.component.scss']
})
export class SmartCityComponent {

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



 

 async ngOnInit() {
  await this.getwebContent()
  }


}
