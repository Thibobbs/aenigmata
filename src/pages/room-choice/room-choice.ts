import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { GameLevelPage} from '../game-level/game-level';

@IonicPage()
@Component({
  selector: 'page-room-choice',
  templateUrl: 'room-choice.html',
})
export class RoomChoicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomChoicePage');
  }

  private slidePage() {
  
    this.navCtrl.push(GameLevelPage);
  }
}
