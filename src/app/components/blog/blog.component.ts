import { Component, Input, OnInit } from '@angular/core';
import { PagedResult } from '@models/paged-results-model';
import { PostModel, PostQueryModel } from '@models/post-model';
import { HttpPostService } from 'src/app/services/http-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  @Input() homePage!: boolean;
  posts!: PostModel[];

  private query: PostQueryModel = { pageNumber: 1, pageSize: 3 };
  private pagedResult: PagedResult<void> | null = null;

  constructor(private http: HttpPostService) {}

  ngOnInit(): void {
    if (this.homePage) {
      this.http.getLatestPost().subscribe((postModel) => {
        this.posts = [postModel];
      });
    } else {
      this.loadPagedPosts();
    }
  }
  loadPagedPosts(): void {
    this.http.getPosts(this.query).subscribe((pagedResult) => {
      if (this.posts == undefined) {
        this.posts = pagedResult.items;
      } else {
        this.posts = this.posts.concat(pagedResult.items);
      }
      this.pagedResult = { ...pagedResult, items: [] };
      this.query.pageNumber++;
    });
  }
  public loadMore(): void {
    if (
      this.pagedResult != null &&
      this.query.pageNumber <= this.pagedResult.totalPages
    ) {
      this.loadPagedPosts();
    }
  }
  public isAllLoaded(): boolean {
    return (
      this.pagedResult !== null &&
      this.query.pageNumber === this.pagedResult.totalPages
    );
  }
}
