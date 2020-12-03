import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GambarPage } from './gambar.page';

const routes: Routes = [
  {
    path: '',
    component: GambarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GambarPageRoutingModule {}
