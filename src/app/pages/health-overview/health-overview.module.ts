import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthOverviewPageRoutingModule } from './health-overview-routing.module';

import { HealthOverviewPage } from './health-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthOverviewPageRoutingModule
  ],
  declarations: [HealthOverviewPage]
})
export class HealthOverviewPageModule {}
