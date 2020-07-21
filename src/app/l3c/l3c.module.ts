import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L3cPageRoutingModule } from './l3c-routing.module';

import { L3cPage } from './l3c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L3cPageRoutingModule
  ],
  declarations: [L3cPage]
})
export class L3cPageModule {}
