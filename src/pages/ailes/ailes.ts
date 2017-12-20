import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { SallesPage } from '../salles/salles';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the AilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ailes',
  templateUrl: 'ailes.html',
})
export class AilesPage {

  nextPage = SallesPage;
  private infos;

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AilesPage');
  }

  ionViewWillUnload() {
//    this.navigate.closePage();
  }

}
