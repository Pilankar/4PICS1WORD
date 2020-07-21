import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L1aPageRoutingModule } from './l1a-routing.module';

import { L1aPage } from './l1a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L1aPageRoutingModule
  ],
  declarations: [L1aPage]
})
export class L1aPageModule {}
