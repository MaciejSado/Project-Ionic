import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesCorkPage } from './places-cork.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesCorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesCorkPageRoutingModule {}
