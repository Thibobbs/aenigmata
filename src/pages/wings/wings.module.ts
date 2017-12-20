import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WingsPage } from './wings';

@NgModule({
  declarations: [
    WingsPage,
  ],
  imports: [
    IonicPageModule.forChild(WingsPage),
  ],
})
export class WingsPageModule {}
