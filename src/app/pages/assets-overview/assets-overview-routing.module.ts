import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetsOverviewPage } from './assets-overview.page';

const routes: Routes = [
  {
    path: '',
    component: AssetsOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetsOverviewPageRoutingModule {}
