import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryModel } from '@models/gallery-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGalleryService {
  private url = 'https://mk.wilpa.pl:3443/api/gallery';

  constructor(private http: HttpClient) { }

  getGalleryByName(galleryName: string):Observable<GalleryModel> {
    return this.http.get<GalleryModel>(this.url + '/get-by-name/' + galleryName );
  }
}
