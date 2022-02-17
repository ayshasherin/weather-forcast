import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const icons = {
  sun: "fa-solid fa-sun",
  cloudSun: "fa-solid fa-cloud-sun",
  smog: "fa-solid fa-smog",
}
@Component({
  selector: 'app-weath',
  templateUrl: './weath.component.html',
  styleUrls: ['./weath.component.css']
})
export class WeathComponent implements OnInit {
  weather: any = {};
  dailyForecast: any = [];
  city = '';
  constructor(private service: DataService) { }

  ngOnInit(): void { }

  getIcon(temp: Number) {
    if (temp < 40) {
      return icons.sun
    }
    else if (temp >= 21 && temp < 25) {
      return icons.cloudSun
    }
    else if (temp > 20) {
      return icons.smog
    }
    else {
      return icons.cloudSun
    }
  }

  loadData() {
    this.service.getWeather(this.city).subscribe((data) => {
      this.weather = data;
      console.log('bbbbbb', data);

      this.service
        .getDailyForcast(this.weather.coord.lat, this.weather.coord.lon)
        .subscribe((data: any) => {
          this.dailyForecast = data.daily.reduce((acc: any, dailyData: any, index: number) => {
            if (index === 7) return acc
            acc.push({
              temp: dailyData.temp.day,
              day: days[index],
              icon: this.getIcon(dailyData.temp.day)

            });
            return acc;
          }, []);
          console.log('cccc', this.dailyForecast);
        });
    });
  }



}
