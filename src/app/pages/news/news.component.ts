import { Component, OnInit } from '@angular/core';
import { NavigationExtras, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(this.router.getCurrentNavigation()?.extras.state)?.['details'];
  });
    
  }

  ngOnInit(): void {



  }

}
