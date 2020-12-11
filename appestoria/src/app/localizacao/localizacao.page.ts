import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Leaflet from 'leaflet';
import { AlertService } from '../services/alert.service';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.page.html',
  styleUrls: ['./localizacao.page.scss'],
})
export class LocalizacaoPage  {
  map: Leaflet.Map;
  marker: any;
  subscription: Subscription;
  coords: any = [];

  constructor(
    private geolocation: Geolocation,
    private api: ApiService,
    private alert: AlertService
  ) { }

  private createMap(): void {
    this.map = Leaflet.map('mapId').setView([-9.002137, -36.325678], 15);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'App Valmir Motorista',
    }).addTo(this.map);
  }

  ionViewDidEnter(): void {
    this.createMap();
  }

  ionViewDidLeave(): void {
    this.map.remove();
  }

  btnUpdateLocation(tracking){
    if (tracking){
      this.subscription = this.geolocation.watchPosition().subscribe(async(response: any)=>{
        this.coords = [response.coords.latitude, response.coords.longitude];
        this.api.updateDriverLocation(this.coords[0], this.coords[1], tracking)
        .then(()=>{
          if (this.marker != null){
            this.map.removeLayer(this.marker);
          }
          this.marker = Leaflet.marker(this.coords)
          .addTo(this.map).bindPopup('Você está aqui.');
          this.map.setView(this.coords, 16);
        }).catch(()=>{
          
        });
      });
    }else{
      this.subscription.unsubscribe();
      this.api.updateDriverLocation(this.coords[0], this.coords[1], tracking)
      .then(()=>{
        this.alert.presentCustomAlert("Sucesso", "Localização pausada.");
      }).catch(()=>{
      
      });
    } 
  }
}