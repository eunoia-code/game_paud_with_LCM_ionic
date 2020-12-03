import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkorPageRoutingModule } from './skor-routing.module';

import { SkorPage } from './skor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkorPageRoutingModule
  ],
  declarations: [SkorPage]
})
export class SkorPageModule {}
