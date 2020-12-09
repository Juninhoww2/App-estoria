import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'converter-moeda',
    loadChildren: () => import('./converter-moeda/converter-moeda.module').then( m => m.ConverterMoedaPageModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./facebook/facebook.module').then( m => m.FacebookPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
