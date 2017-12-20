import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OeuvresPage } from './oeuvres';

@NgModule({
  declarations: [
    OeuvresPage,
  ],
  imports: [
    IonicPageModule.forChild(OeuvresPage),
  ],
})
export class OeuvresPageModule {}
