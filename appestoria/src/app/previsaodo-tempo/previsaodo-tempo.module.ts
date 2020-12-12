import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevisaodoTempoPageRoutingModule } from './previsaodo-tempo-routing.module';

import { PrevisaodoTempoPage } from './previsaodo-tempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevisaodoTempoPageRoutingModule
  ],
  declarations: [PrevisaodoTempoPage]
})
export class PrevisaodoTempoPageModule {}
