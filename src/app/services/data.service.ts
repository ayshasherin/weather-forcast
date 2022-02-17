import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  getWeather(city: string) {
    console.log(city);

    let params = new HttpParams()
      .set('q', city)
      .set('appId', environment.apiKey)
      .set('units', 'metric')
    return this.http.get(`${environment.apiUrl}/weather`, {
      params,
    });
  }

  getDailyForcast(lat: string, lon: string) {

    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appId', environment.apiKey)
      .set('units', 'metric')
    return this.http.get(`${environment.apiUrl}/onecall`, {
      params,
    });
  }

}
