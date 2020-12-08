import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevisaoDoTempoPageRoutingModule } from './previsao-do-tempo-routing.module';

import { PrevisaoDoTempoPage } from './previsao-do-tempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevisaoDoTempoPageRoutingModule
  ],
  declarations: [PrevisaoDoTempoPage]
})
export class PrevisaoDoTempoPageModule {}
