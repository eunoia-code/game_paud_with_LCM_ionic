import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'huruf',
    loadChildren: () => import('./huruf/huruf.module').then( m => m.HurufPageModule)
  },
  {
    path: 'angka',
    loadChildren: () => import('./angka/angka.module').then( m => m.AngkaPageModule)
  },
  {
    path: 'gambar',
    loadChildren: () => import('./gambar/gambar.module').then( m => m.GambarPageModule)
  },
  {
    path: 'suara',
    loadChildren: () => import('./suara/suara.module').then( m => m.SuaraPageModule)
  },
  {
    path: 'warna',
    loadChildren: () => import('./warna/warna.module').then( m => m.WarnaPageModule)
  },
  {
    path: 'skor',
    loadChildren: () => import('./skor/skor.module').then( m => m.SkorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
