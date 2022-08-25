import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesDublinPage } from './places-dublin.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesDublinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesDublinPageRoutingModule {}
