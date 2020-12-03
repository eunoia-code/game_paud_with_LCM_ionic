import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HurufPage } from './huruf.page';

const routes: Routes = [
  {
    path: '',
    component: HurufPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HurufPageRoutingModule {}
