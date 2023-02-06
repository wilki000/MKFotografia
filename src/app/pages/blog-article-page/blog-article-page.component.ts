import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '@models/post-model';
import { Subscription } from 'rxjs';
import { HttpPostService } from 'src/app/services/http-post.service';

@Component({
  selector: 'app-blog-article-page',
  templateUrl: './blog-article-page.component.html',
  styleUrls: ['./blog-article-page.component.scss'],
})
export class BlogArticlePageComponent implements OnInit, OnDestroy {
  post!: PostModel;
  routeSubscription: Subscription | null = null;
  postSubscription: Subscription | null = null;
  

  constructor(private route: ActivatedRoute, private http: HttpPostService) {
  }
  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.postSubscription = this.http.getPost(params['id']).subscribe((post) => {
        this.post = post;
      })
    })
  }
  
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.postSubscription?.unsubscribe();
  }
  
}
