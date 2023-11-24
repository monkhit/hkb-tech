import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TeamModalComponent } from 'src/app/component/team-modal/team-modal.component';
import teamDetails from "../../../assets/json/team.json";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ["./team.component.scss"]
})
export class TeamComponent {

  team: any = teamDetails;
  modalData: any;

  constructor(
    private modalService: NgbModal
  ) {}

  presentModal(item: any) {
    this.modalData = this.modalService.open(TeamModalComponent, {
      fullscreen: true,
      animation: true,
      scrollable: true,
    });
    this.modalData.componentInstance.teamDetails = item;
  }

}
