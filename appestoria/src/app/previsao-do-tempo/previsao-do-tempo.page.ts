import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Clima } from '/Users/Junio/Documents/App-estoria/appestoria/src/providers/clima';

@Component({
  selector: 'app-previsao-do-tempo',
  templateUrl: './previsao-do-tempo.page.html',
  styleUrls: ['./previsao-do-tempo.page.scss'],
})
export class PrevisaoDoTempoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class PrevisaoPage {
  public climaCidade;
  public previsaoList = [];
  constructor(public navCtrl: NavController, navParams: NavParams, public clima: Clima) {
    this.climaCidade = navParams.get('climaCidade');
    this.obterPrevisao(this.climaCidade.id);
  }

  obterPrevisao(idCidade) {
    this.clima.previsao(idCidade, 7)
      .map(data => data.json())
      .subscribe(data => {
        console.log(data.list);
        this.previsaoList = data.list;
      });
  }

}