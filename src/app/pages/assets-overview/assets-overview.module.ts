import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetsOverviewPageRoutingModule } from './assets-overview-routing.module';

import { AssetsOverviewPage } from './assets-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssetsOverviewPageRoutingModule
  ],
  declarations: [AssetsOverviewPage]
})
export class AssetsOverviewPageModule {}
