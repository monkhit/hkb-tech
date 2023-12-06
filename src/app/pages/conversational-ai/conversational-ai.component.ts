import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-conversational-ai',
  templateUrl: './conversational-ai.component.html',
  styleUrls: ['./conversational-ai.component.scss']
})
export class ConversationalAiComponent {

  aiDetail:any;
  activeTab = 0;
  caseStudyPage= 'AI';

  constructor(
    private serviceProvider: CommonserviceService
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
