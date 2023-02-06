import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedResult } from '@models/paged-results-model';
import { PostModel, PostQueryModel } from '@models/post-model';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpPostService {
  private url = 'https://mk.wilpa.pl:3443/api/post';

  constructor(private http: HttpClient) {}

  getLatestPost(): Observable<PostModel> {
    return this.http
      .get<PostModel>(this.url + '/latest')
      .pipe(
        map((postModel) => ({ ...postModel, image: this.url + '/latest/img' }))
      );
  }

  getPosts(postQuery: PostQueryModel): Observable<PagedResult<PostModel>> {
    const params = new HttpParams({
      fromObject: { ...postQuery },
    });
    return this.http
      .get<PagedResult<PostModel>>(this.url, { params: params })
      .pipe(
        map(
          (pagedResult) =>
            <PagedResult<PostModel>>{
              ...pagedResult,
              items: pagedResult.items.map((post: PostModel) => ({
                ...post,
                image: this.url + '/' + post.id + '/img',
              })),
            }
        )
      );
  }

  getPost(id: number): Observable<PostModel> {
    return this.http
      .get<PostModel>(this.url + '/' + id)
      .pipe(
        map((postModel) => ({
          ...postModel,
          image: this.url + '/' + id + '/img',
        }))
      );
  }
}
