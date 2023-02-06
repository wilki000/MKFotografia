import { Component, ViewChild } from '@angular/core';
import { BlogComponent } from '@components/blog/blog.component';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss']
})
export class BlogListPageComponent {
  @ViewChild('blog', { static: false })
  blogComponent!: BlogComponent;
  loadMore(){
    this.blogComponent.loadMore();
  }
}
