import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      window.scrollTo(0, 0);
    })
  }

  ngOnInit(): void {
  }

}
