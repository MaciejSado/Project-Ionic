import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DublinPage } from './dublin.page';

const routes: Routes = [
  {
    path: '',
    component: DublinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DublinPageRoutingModule {}
