import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomTestPage } from './room-test';

@NgModule({
  declarations: [
    RoomTestPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomTestPage),
  ],
})
export class RoomTestPageModule {}
