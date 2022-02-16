import { Component, OnInit } from '@angular/core';
import { Weather } from '../model/weather.model';
import { DataService } from '../services/data.service'
import { Subject, take } from 'rxjs';


@Component({
  selector: 'app-weath',
  templateUrl: './weath.component.html',
  styleUrls: ['./weath.component.css']
})
export class WeathComponent implements OnInit {
  weather:Weather[]=[]
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    
    this.service
      .getData()
      
      .subscribe((res: any) => {
      
        Array.from(res).forEach((weather: any) => {
          res.push({
           temp:weather["main"].temp,
          //  precipitation:weather.precipitation,
           humidity:weather["main"].humidity,
           wind:weather["wind"].speed
           
           
  
          });
          
        });
        console.log(res);
      });
    }


getCity(event:Event){
// this.service.getWeatherDataByCityName(city).subscribe(data=>{
//   this.weather=data
// })
const searchValue=(event.target as HTMLInputElement).value;
console.log(searchValue);

}

}
