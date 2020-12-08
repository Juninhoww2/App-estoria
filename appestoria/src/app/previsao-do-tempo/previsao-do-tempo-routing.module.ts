import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisaoDoTempoPage } from './previsao-do-tempo.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisaoDoTempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisaoDoTempoPageRoutingModule {}
