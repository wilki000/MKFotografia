import { Component, Input } from '@angular/core';
import { BLOG, PostModel } from '@models/post-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input() homePage!: boolean;
  posts: PostModel[];

  constructor() {
    this.posts = BLOG;
  }
}
