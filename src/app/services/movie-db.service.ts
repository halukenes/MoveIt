import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieDBService {

  constructor(private http: HttpClient) { }

  async searchMoviewithQuery(query: string): Promise<any> {
    const response = await this.http.get(environment.tmdSearchUrl + '&query=' + query).toPromise();
    console.log(response);
  }
}
