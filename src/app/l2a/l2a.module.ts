import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L2aPageRoutingModule } from './l2a-routing.module';

import { L2aPage } from './l2a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L2aPageRoutingModule
  ],
  declarations: [L2aPage]
})
export class L2aPageModule {}
