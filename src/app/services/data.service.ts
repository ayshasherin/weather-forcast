import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../model/weather.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
// url='https://api.openweathermap.org/data/2.5/weather';
// apiKey='82d46d6905d4f40d04122639600fe05e';
  constructor(private http: HttpClient) { }

  get(url: string, options?: any) {
    return this.http.get(url, options);
  }

  getData() {
    return this.http.get<Weather>('https://api.openweathermap.org/data/2.5/weather?q=${location_name}&appid=82d46d6905d4f40d04122639600fe05e&units=metric');
  }

//   getWeatherDataByCityName(city:string){
// let params=new HttpParams()
// .set('q',city)
// .set('units','imperial')
// .set('appid',this.apiKey)

// return this.http.get(this.url,{params});
//   }
// }
}
