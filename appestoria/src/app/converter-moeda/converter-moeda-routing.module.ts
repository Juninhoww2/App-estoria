import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConverterMoedaPage } from './converter-moeda.page';

const routes: Routes = [
  {
    path: '',
    component: ConverterMoedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConverterMoedaPageRoutingModule {}
