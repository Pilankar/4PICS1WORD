import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L3bPageRoutingModule } from './l3b-routing.module';

import { L3bPage } from './l3b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L3bPageRoutingModule
  ],
  declarations: [L3bPage]
})
export class L3bPageModule {}
