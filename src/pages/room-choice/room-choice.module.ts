import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomChoicePage } from './room-choice';

@NgModule({
  declarations: [
    RoomChoicePage,
  ],
  imports: [
    IonicPageModule.forChild(RoomChoicePage),
  ],
})
export class RoomChoicePageModule {}
