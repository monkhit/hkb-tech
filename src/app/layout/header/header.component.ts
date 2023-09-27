import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
    MenuItems = [
         {name: 'ABOUT',  id:'about'},
         {name: 'SERVICES',   class: '',  id:'services'},
         {name: 'INDUSTRIES',  class: '', id:'sector'},
         {name: 'PARTNER',  class: '', id:'team'},
         {name: 'NEWS',  class: '', id:'news'},
         {name: 'CONTACT US',  class: '', id:'contact'},
    ]
         


  constructor(
  ) { }


  onClick(event: Event) {
    event.preventDefault(); // Prevent the default behavior (page reload)
    // Handle navigation or other actions within your Angular component
  }


  ngOnInit(): void {
  }

}
