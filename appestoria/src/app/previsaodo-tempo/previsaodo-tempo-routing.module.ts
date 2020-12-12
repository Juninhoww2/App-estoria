import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisaodoTempoPage } from './previsaodo-tempo.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisaodoTempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisaodoTempoPageRoutingModule {}
