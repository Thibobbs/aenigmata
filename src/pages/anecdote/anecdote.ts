import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
//import { RecherchePage } from '../recherche/recherche';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the AnecdotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anecdote',
  templateUrl: 'anecdote.html',
})
export class AnecdotePage {

  nextPage;
  private infos;
  private params;
  private imgPath = '../../assets/imgs/full/';

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnecdotePage');
  }

  returnToOeuvres() {
    if (this.navCtrl.getViews().length == 5) {
      this.navCtrl.remove(2, 3);
    } else {
      this.navCtrl.pop();
    }
  }

}
