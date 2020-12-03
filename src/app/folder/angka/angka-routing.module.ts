import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngkaPage } from './angka.page';

const routes: Routes = [
  {
    path: '',
    component: AngkaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngkaPageRoutingModule {}
