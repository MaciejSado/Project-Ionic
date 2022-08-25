import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimerickPageRoutingModule } from './limerick-routing.module';

import { LimerickPage } from './limerick.page';
// importing the placesLimerick page and its contents *
import {PlacesLimerickPageModule} from '../places-limerick/places-limerick.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimerickPageRoutingModule,
    PlacesLimerickPageModule //  *
  ],
  declarations: [LimerickPage]
})
export class LimerickPageModule {}
