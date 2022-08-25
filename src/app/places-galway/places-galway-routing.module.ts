import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesGalwayPage } from './places-galway.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesGalwayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesGalwayPageRoutingModule {}
