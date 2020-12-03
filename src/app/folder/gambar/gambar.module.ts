import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GambarPageRoutingModule } from './gambar-routing.module';

import { GambarPage } from './gambar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GambarPageRoutingModule
  ],
  declarations: [GambarPage]
})
export class GambarPageModule {}
