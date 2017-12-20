import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
//import { RecherchePage } from '../recherche/recherche';
import { ScanPage } from '../scan/scan';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the RecherchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recherche',
  templateUrl: 'recherche.html',
})
export class RecherchePage {

  nextPage;
  private infos;
  private params;
  result;

  callbackParameters = data => {
    return new Promise((resolve, reject) => {
      this.infos = data.infos;
      this.params = data.params;
      this.result = data.result;
      console.log(data);
      resolve();
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

}
