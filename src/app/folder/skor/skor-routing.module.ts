import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkorPage } from './skor.page';

const routes: Routes = [
  {
    path: '',
    component: SkorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkorPageRoutingModule {}
