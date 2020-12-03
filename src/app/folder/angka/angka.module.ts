import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngkaPageRoutingModule } from './angka-routing.module';

import { AngkaPage } from './angka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngkaPageRoutingModule
  ],
  declarations: [AngkaPage]
})
export class AngkaPageModule {}
