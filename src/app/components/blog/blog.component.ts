import { OnInit, Component, Input } from '@angular/core';
import { BLOG, PostModel } from '@models/post-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() homePage!: boolean;
  posts!: PostModel[];

  constructor() {}
  ngOnInit(): void {
    if (this.homePage) {
      this.posts = [BLOG[0]];
    } else {
      this.posts = BLOG;
    }
  }
}
