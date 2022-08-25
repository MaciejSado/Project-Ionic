import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesGalwayPageRoutingModule } from './places-galway-routing.module';

import { PlacesGalwayPage } from './places-galway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesGalwayPageRoutingModule
  ],
  exports:[PlacesGalwayPage], // exporting the page so it can be imported to the galway page
  declarations: [PlacesGalwayPage]
})
export class PlacesGalwayPageModule {}
