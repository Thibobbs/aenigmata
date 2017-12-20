import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
//import { RecherchePage } from '../recherche/recherche';

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

  nextPage = RecherchePage;
  private infos;
  private params;

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

}
