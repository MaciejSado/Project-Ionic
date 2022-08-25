import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorkPageRoutingModule } from './cork-routing.module';

import { CorkPage } from './cork.page';
// importing the placesCork page and its contents *
import {PlacesCorkPageModule} from '../places-cork/places-cork.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorkPageRoutingModule,
    PlacesCorkPageModule //  *
  ],
  declarations: [CorkPage]
})
export class CorkPageModule {}
