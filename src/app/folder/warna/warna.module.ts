import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarnaPageRoutingModule } from './warna-routing.module';

import { WarnaPage } from './warna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarnaPageRoutingModule
  ],
  declarations: [WarnaPage]
})
export class WarnaPageModule {}
