import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanqrcodePageRoutingModule } from './scanqrcode-routing.module';

import { ScanqrcodePage } from './scanqrcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanqrcodePageRoutingModule
  ],
  declarations: [ScanqrcodePage]
})
export class ScanqrcodePageModule {}
