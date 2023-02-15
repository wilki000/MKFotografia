import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedResult } from '@models/paged-results-model';
import { PostModel, PostQueryModel, PutPostModel } from '@models/post-model';
import { map, Observable } from 'rxjs';
import { HttpExtendedClient } from '../modules/http-auth/http-auth.module';

@Injectable({
  providedIn: 'root',
})
export class HttpPostService {
  private url = 'https://magiachwilifotografia.pl/api/post';

  constructor(private http: HttpExtendedClient) {}

  getLatestPost(): Observable<PostModel> {
    return this.http.get<PostModel>(this.url + '/latest').pipe(
      map((postModel) => ({
        ...postModel,
        image: this.url + '/' + postModel.id + '/img',
      }))
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
    return this.http.get<PostModel>(this.url + '/' + id).pipe(
      map((postModel) => ({
        ...postModel,
        image: this.url + '/' + id + '/img',
      }))
    );
  }

  putPost(id: number, data: PutPostModel): Observable<void> {
    let formData = this.http.createFormDataWithoutNullOrEmptyValues(data);

    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.put<void>(this.url + '/' + id, formData, options);
  }

  postPost(data: PutPostModel): Observable<void> {
    let formData = this.http.createFormDataWithoutNullOrEmptyValues(data);

    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.post<void>(this.url, formData, options);
  }

  deletePost(postId: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({ Authorization: this.http.getBearerToken() }),
    };
    return this.http.delete<any>(this.url + '/' + postId, options);
  }
}
