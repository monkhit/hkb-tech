import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  videoSource = './assets/video/intro.mp4'

  tabs = [
    { title: 'Tab 1', content: 'Content for Tab 1' },
    { title: 'Tab 2', content: 'Content for Tab 2' },
    { title: 'Tab 3', content: 'Content for Tab 3' }
  ];

  constructor() { }

  activeTab = 0;

  activateTab(index: number): void {
    console.log(index)
    this.activeTab = index;
  }

  ngOnInit(): void {
  }

}
