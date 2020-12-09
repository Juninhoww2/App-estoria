import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConverterMoedaPageRoutingModule } from './converter-moeda-routing.module';

import { ConverterMoedaPage } from './converter-moeda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverterMoedaPageRoutingModule
  ],
  declarations: [ConverterMoedaPage]
})
export class ConverterMoedaPageModule {}
