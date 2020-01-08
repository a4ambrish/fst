import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://blog.ambrishjha.in/wp-json/wcra/v1/api/?secret_key=tz1Enppaq00xOYySu8YaDt578LT5oQgP';
  apiKey = ''; // <-- Enter your own key here!
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 /**
  * Get data from the OmdbApi 
  * map the result to return only the results that we need
  * 
  * @param {string} title Search Term
  * @param {SearchType} type movie, series, episode or empty
  * @returns Observable with the search results
  */
 searchData(): Observable<any> {
  
  return this.http.get(`${this.url}`).pipe(
    map(results => results['data'])
  );
}
}
