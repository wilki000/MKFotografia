import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BlogComponent } from '@components/blog/blog.component';

type NewType = Title;

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss'],
})
export class BlogListPageComponent {
  @ViewChild('blog', { static: false })
  blogComponent!: BlogComponent;
  allLoaded: boolean = false;
  constructor(private metaService: Meta, private titleService: Title) {
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
  loadMore() {
    this.blogComponent.loadMore();
    this.allLoaded = this.blogComponent.isAllLoaded();
  }
}
