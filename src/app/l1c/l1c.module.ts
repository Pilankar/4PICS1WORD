import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L1cPageRoutingModule } from './l1c-routing.module';

import { L1cPage } from './l1c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L1cPageRoutingModule
  ],
  declarations: [L1cPage]
})
export class L1cPageModule {}
