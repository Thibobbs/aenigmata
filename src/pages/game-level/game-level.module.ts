import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameLevelPage } from './game-level';

@NgModule({
  declarations: [
    GameLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(GameLevelPage),
  ],
})
export class GameLevelPageModule {}
