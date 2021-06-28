import { Injectable } from '@angular/core';
import { Peliculas } from '../Model/Peliculas.interface';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:string = "https://api.themoviedb.org/3/movie/now_playing"

  constructor(private http:HttpClient) {
    
  }
  
  getMovies() : Observable<Peliculas>{
    let params = new HttpParams();
    params = params.append('api_key', '14a1e7de4368a6f1aa7846b910aa671c');
    params = params.append('languaje', 'en-ES');
    params = params.append('page', '1');
    
    return this.http.get<Peliculas>(this.url, {params});
  }
}
