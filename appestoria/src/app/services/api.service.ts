import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apis: string = 'https://cep.awesomeapi.com.br/'
  private api: string = 'https://economia.awesomeapi.com.br/';
  constructor(private http: HttpClient) { }

  createData() {

  }

  readData() {
    return this.http.get(`${this.api}all/USD-BRL,EUR-BRL,BTC-BRL`)
  }

  readDatas() {
    return this.http.get(`${this.apis}json/05424020`)
  }
}
