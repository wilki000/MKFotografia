import {
  Component,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { PagedResult } from '@models/paged-results-model';
import { PostModel, PostQueryModel } from '@models/post-model';
import { DeletePopupService } from 'src/app/services/delete-popup.service';
import { HttpPostService } from 'src/app/services/http-post.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  posts!: PostModel[];

  public query: PostQueryModel = { pageNumber: 1, pageSize: 10 };
  public pagedResult: PagedResult<void> | null = null;
  constructor(
    private http: HttpPostService,
    public popupService: DeletePopupService,
    private vcref: ViewContainerRef,
    private router: Router,
  ) {
    this.popupService.setViewContainerRef(this.vcref);
    this.loadPagedPosts();
  }

  loadPagedPosts(): void {
    this.http
      .getPosts(this.query)
      .subscribe((pagedResult) => {
        this.posts = pagedResult.items;
        this.pagedResult = { ...pagedResult, items: [] };
      });
  }

  previousPage() {
    if (this.query.pageNumber > 1) {
      this.query.pageNumber--;
      this.loadPagedPosts();
    }
  }
  nextPage() {
    if (
      this.pagedResult !== null &&
      this.query.pageNumber < this.pagedResult.totalPages
    ) {
      this.query.pageNumber++;
      this.loadPagedPosts();
    }
  }

  private reloadPage(): void {
    this.router
      .navigateByUrl('/', {
        skipLocationChange: true,
      })
      .then(() => {
        this.router.navigate(['/', 'admin', 'blog-list']);
      });
  }
  
  deletePost(postId: number): (deleted: boolean) => void {
    return (deleted: boolean) => {
      if (deleted) {
        this.http.deletePost(postId).subscribe(() => {
          this.reloadPage()
        })
      } 
    };
  }
}
