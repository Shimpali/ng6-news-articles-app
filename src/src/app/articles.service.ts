import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  articlesList(): any {
    const url = 'https://api.myjson.com/bins/10ijyt';
   const list =  this.http.get(url).pipe(map(response => response));
 return list;
  }
}
