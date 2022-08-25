import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesLimerickPage } from './places-limerick.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesLimerickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesLimerickPageRoutingModule {}
