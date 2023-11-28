import { Component } from '@angular/core';
import caseStudy from "../../../assets/json/caseStudy.json";
import {
  NavigationExtras,
  ActivatedRoute,
  Router,
  NavigationStart,
} from "@angular/router";
@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent {
  caseStudy: any = caseStudy;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router ) {}


    
    async navigate(item: any, id: any, type: any) {
      const navigationExtras: NavigationExtras = {
        relativeTo: this.activatedRoute,
        queryParams: {type: item.title},
        state: {
          details: item,
        },
      };
      this.router.navigate(["/blog-description"], navigationExtras);

    
    }
}
