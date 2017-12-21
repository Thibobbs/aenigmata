import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ResultPage} from '../result/result';

@IonicPage()
@Component({
  selector: 'page-room-test',
  templateUrl: 'room-test.html',
})
export class RoomTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomTestPage');
  }

  private slidePage() {
  
    this.navCtrl.push(ResultPage);
  }
}
