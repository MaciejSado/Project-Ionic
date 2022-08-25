import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesLimerickPageRoutingModule } from './places-limerick-routing.module';

import { PlacesLimerickPage } from './places-limerick.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesLimerickPageRoutingModule
  ],
  exports:[PlacesLimerickPage], // exporting the page so it can be imported to the limerick page
  declarations: [PlacesLimerickPage]
})
export class PlacesLimerickPageModule {}
