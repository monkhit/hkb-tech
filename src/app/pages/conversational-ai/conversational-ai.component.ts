import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-conversational-ai',
  templateUrl: './conversational-ai.component.html',
  styleUrls: ['./conversational-ai.component.scss']
})
export class ConversationalAiComponent {

  aiDetail:any;
  activeTab = 0;
  caseStudyPage= 'AI';

  emailValid =/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,25})$/;
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

  constructor(
    private serviceProvider: CommonserviceService,
    public translate: TranslateService,
  ) {}

  async getaiDetail(){
    const url ='../assets/json/conversational-ai/conversational-ai.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.aiDetail = response;
        // console.log(response)
      }
      })
  }

  
  activateTab(index: number): void {
    console.log(index);
    this.activeTab = index;
  }

  async ngOnInit() {
    await this.getaiDetail()
    }
  

}
