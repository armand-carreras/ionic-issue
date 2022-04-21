import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestureRoutingPageRoutingModule } from './gesture-routing-routing.module';

import { GestureRoutingPage } from './gesture-routing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestureRoutingPageRoutingModule
  ],
  declarations: [GestureRoutingPage]
})
export class GestureRoutingPageModule {}
