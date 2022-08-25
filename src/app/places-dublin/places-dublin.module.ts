import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesDublinPageRoutingModule } from './places-dublin-routing.module';

import { PlacesDublinPage } from './places-dublin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesDublinPageRoutingModule
  ],
  exports:[PlacesDublinPage],  // exporting the page so it can be imported to the dublin page
  declarations: [PlacesDublinPage]
})
export class PlacesDublinPageModule {}
