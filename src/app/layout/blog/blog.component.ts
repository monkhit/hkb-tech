import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
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
  blogs: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceProvider: CommonserviceService
    ) {}


    
  async getBlog(){
    const url ='../assets/json/blog/blogs.json'
    this.serviceProvider.getWebService(url).subscribe({
      next: async (response: any) => {
        this.blogs = response;
      }
      })
  }


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


    async ngOnInit() {
      await this.getBlog()
     }


}
