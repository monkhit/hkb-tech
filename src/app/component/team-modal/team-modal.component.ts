import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.scss']
})
export class TeamModalComponent {
  @Input() teamDetails: any;
  teamDescription : any;

  constructor(
    private ActiveModal : NgbActiveModal
  ){ }



  dismiss(){
    this.ActiveModal.close();
  }



  ngOnInit() {
    if(this.teamDetails){
      this.teamDescription = this.teamDetails
      console.log(this.teamDescription)
    }


    }

}
