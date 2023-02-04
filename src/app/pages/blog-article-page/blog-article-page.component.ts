import { Component } from '@angular/core';
import { BLOG, PostModel } from '@models/post-model';

@Component({
  selector: 'app-blog-article-page',
  templateUrl: './blog-article-page.component.html',
  styleUrls: ['./blog-article-page.component.scss'],
})
export class BlogArticlePageComponent {
  post: PostModel;

  constructor() {
    this.post = BLOG[0];
  }
}
