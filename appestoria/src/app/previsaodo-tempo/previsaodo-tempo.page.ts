import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-previsaodo-tempo',
  templateUrl: './previsaodo-tempo.page.html',
  styleUrls: ['./previsaodo-tempo.page.scss'],
})
export class PrevisaodoTempoPage implements OnInit {
  place:string="";
  type:string="";
  icon:string="";
  temperature:string="";
  constructor(public httpClient:HttpClient, public geolocation:Geolocation, public platform:Platform) {
    this.platform.ready().then(()=>{
      this.GetCurrentLocation();
    })
   }

  GetCurrentLocation()
  {
    this.geolocation.getCurrentPosition().then((position)=>{
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      this.GetCurrentTemperature(latitude, longitude);
    })
  } 

  GetCurrentTemperature(latitude,longitude)
  {
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=7507d76e27d100243ec6f882f99dd1ad";
    this.httpClient.get(url).subscribe((temperaturedata)=>{
      var obj = <any>temperaturedata;
      this.place = obj.name;
      this.type = obj.weather[0].main;
      this.icon = "http://openweathermap.org/img/w"+obj.weather[0].icon+".png";
      this.temperature = ((parseFloat(obj.main.temp)-273.15).toFixed(2)).toString()+"°C"; 
    })
  }

  ngOnInit() {
  }

}
