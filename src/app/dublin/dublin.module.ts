import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DublinPageRoutingModule } from './dublin-routing.module';

import { DublinPage } from './dublin.page';
// importing the placesDublin page and its contents *
import {PlacesDublinPageModule} from '../places-dublin/places-dublin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DublinPageRoutingModule,
    PlacesDublinPageModule //  *
  ],
  declarations: [DublinPage]
})
export class DublinPageModule {}
