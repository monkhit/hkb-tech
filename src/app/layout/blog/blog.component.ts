import { Component } from '@angular/core';
import blogs from "../../../assets/json/blogs.json";
import {
  NavigationExtras,
  ActivatedRoute,
  Router,
  NavigationStart,
} from "@angular/router";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent {
  blogs: any = blogs;

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
