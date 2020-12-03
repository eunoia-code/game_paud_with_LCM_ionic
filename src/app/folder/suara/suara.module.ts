import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuaraPageRoutingModule } from './suara-routing.module';

import { SuaraPage } from './suara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuaraPageRoutingModule
  ],
  declarations: [SuaraPage]
})
export class SuaraPageModule {}
