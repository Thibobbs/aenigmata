import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DidYouKnowPage } from './did-you-know';

@NgModule({
  declarations: [
    DidYouKnowPage,
  ],
  imports: [
    IonicPageModule.forChild(DidYouKnowPage),
  ],
})
export class DidYouKnowPageModule {}
