import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesCorkPageRoutingModule } from './places-cork-routing.module';

import { PlacesCorkPage } from './places-cork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesCorkPageRoutingModule
  ],
   exports:[PlacesCorkPage], // exporting the page so it can be imported to the cork page
  declarations: [PlacesCorkPage]
})
export class PlacesCorkPageModule {}
