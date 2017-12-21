import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';




import { RoomChoicePage } from '../room-choice/room-choice';


@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html'
})
export class RulesPage {

  constructor(public navCtrl: NavController) {

  }


  private slidePage() {

    this.navCtrl.push(RoomChoicePage);
  }

}