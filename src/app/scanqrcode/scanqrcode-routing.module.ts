import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanqrcodePage } from './scanqrcode.page';

const routes: Routes = [
  {
    path: '',
    component: ScanqrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanqrcodePageRoutingModule {}
