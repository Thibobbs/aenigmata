import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnecdotePage } from './anecdote';

@NgModule({
  declarations: [
    AnecdotePage,
  ],
  imports: [
    IonicPageModule.forChild(AnecdotePage),
  ],
})
export class AnecdotePageModule {}
