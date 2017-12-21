import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DidYouKnowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//  PAGE
import { RoomChoicePage } from '../room-choice/room-choice';

@IonicPage()
@Component({
  selector: 'page-did-you-know',
  templateUrl: 'did-you-know.html',
})
export class DidYouKnowPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DidYouKnowPage');
  }

  private slidePage() {
  
    this.navCtrl.push( RoomChoicePage);
  }

}
