import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { TeamModalComponent } from 'src/app/component/team-modal/team-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent {

  team: any ;
  modalData: any;

  constructor(
    private modalService: NgbModal,
    private serviceProvider: CommonserviceService
  ) {}


  async getteamList(){
  const url ='../assets/json/team/team.json'
  this.serviceProvider.getWebService(url).subscribe({
    next: async (response: any) => {
      this.team = response;
      // console.log(response)
    }
    })
}

  presentModal(item: any) {
    this.modalData = this.modalService.open(TeamModalComponent, {
      fullscreen: true,
      animation: true,
      scrollable: true,
    });
    this.modalData.componentInstance.teamDetails = item;
  }


  async ngOnInit() {
    await this.getteamList()
    }
  

}
