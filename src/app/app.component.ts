import { Component, HostBinding, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {





  constructor() {
  
}

  ngAfterViewInit(): void {

    // setTimeout(() => {
    //   this.loader = false

    // }, 3000);

    }

}
