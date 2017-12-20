import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { MappingPage } from '../mapping/mapping';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the WingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wings',
  templateUrl: 'wings.html',
})
export class WingsPage {

  nextPage = MappingPage;
  private infos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WingsPage');
  }

  ionViewWillUnload() {
//    this.navigate.closePage();
  }

}
