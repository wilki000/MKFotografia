import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from '@models/post-model';
import { HttpPostService } from 'src/app/services/http-post.service';

@Component({
  selector: 'app-blog-article-page',
  templateUrl: './blog-article-page.component.html',
  styleUrls: ['./blog-article-page.component.scss'],
})
export class BlogArticlePageComponent implements OnInit {
  post!: PostModel;
  constructor(
    private route: ActivatedRoute,
    private http: HttpPostService,
    private metaService: Meta,
    private titleService: Title
  ) {
    metaService.updateTag({
      name: 'title',
      content: 'Blog | Fotograf Ślubny Grajewo | Magia Chwili Fotografia',
    });
    titleService.setTitle(
      'Blog | Fotograf Ślubny Grajewo | Magia Chwili Fotografia'
    );
    metaService.updateTag({
      name: 'description',
      content:
        'Poznaj ludzi, którzy mi zaufali ❤️ Blog w którym znajdziecie prawdziwe historie wyjątkowych ludzi. Profesjonalna fotografia ślubna. Podlasie, Mazury',
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.http.getPost(params['id']).subscribe((post) => {
        this.post = post;
      });
    });
  }
}
