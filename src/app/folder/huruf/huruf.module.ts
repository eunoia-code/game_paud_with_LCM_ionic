import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HurufPageRoutingModule } from './huruf-routing.module';

import { HurufPage } from './huruf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HurufPageRoutingModule
  ],
  declarations: [HurufPage]
})
export class HurufPageModule {}
