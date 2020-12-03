import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarnaPage } from './warna.page';

const routes: Routes = [
  {
    path: '',
    component: WarnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarnaPageRoutingModule {}
