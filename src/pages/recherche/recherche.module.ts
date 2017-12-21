import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecherchePage } from './recherche';

//Components
import { TimerComponent } from '../../components/timer/timer'

@NgModule({
  declarations: [
    RecherchePage,
    //Components
    TimerComponent
  ],
  imports: [
    IonicPageModule.forChild(RecherchePage),
  ],
})
export class RecherchePageModule {}
