import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the SallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salles',
  templateUrl: 'salles.html',
})
export class SallesPage {

  nextPage;
  private infos;
  private params;

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SallesPage');
  }

}
