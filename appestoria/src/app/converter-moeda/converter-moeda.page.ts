import { Component, OnInit } from '@angular/core';
import { ApiService} from '../services/api.service'; 

@Component({
  selector: 'app-converter-moeda',
  templateUrl: './converter-moeda.page.html',
  styleUrls: ['./converter-moeda.page.scss'],
})
export class ConverterMoedaPage implements OnInit {
  
  constructor(private apiService: ApiService) {
    this.readData();
   }

  readData() {
    this.apiService.readData().subscribe(data => {
      console.log(data);
    });
  } 
  
  ngOnInit() {
  }
  
}
