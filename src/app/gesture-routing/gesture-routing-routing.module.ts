import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestureRoutingPage } from './gesture-routing.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestureRoutingPage,
    children: [
      {
        path: 'map',
        loadChildren: () => import('../pages/map/map.module').then(m => m.MapPageModule)
      },
      {
        path: 'health',
        loadChildren: () => import('../pages/health-overview/health-overview.module').then(m => m.HealthOverviewPageModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('../pages/assets-overview/assets-overview.module').then(m => m.AssetsOverviewPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestureRoutingPageRoutingModule {}
