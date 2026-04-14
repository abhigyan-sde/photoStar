import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  private cloudName = environment.cloudName; 
  private folderName = environment.folderName;
  private baseUrl = `https://res.cloudinary.com/${this.cloudName}`;
  private images$!: Observable<string[]>;

  constructor(private http: HttpClient) {}

  getImages(forceRefresh = false): Observable<string[]> {
    if (!this.images$ || forceRefresh) {
      const url = `${this.baseUrl}/image/list/${this.folderName}.json`;

      this.images$ = this.http.get<any>(url).pipe(
        map(res =>
          res.resources.map((img: any) =>
            `${this.baseUrl}/image/upload/w_800,q_auto,f_auto/${img.public_id}.${img.format}?t=${Date.now()}`
          )
        ),
        shareReplay(1) // 🔥 cache result
      );
    }
    return this.images$;
  }
}