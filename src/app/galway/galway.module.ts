import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalwayPageRoutingModule } from './galway-routing.module';

import { GalwayPage } from './galway.page';
// importing the placesGalway page and its contents *
import {PlacesGalwayPageModule} from '../places-galway/places-galway.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalwayPageRoutingModule,
    PlacesGalwayPageModule //  *
  ],
  declarations: [GalwayPage]
})
export class GalwayPageModule {}
