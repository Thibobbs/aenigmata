import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { AnecdotePage } from '../anecdote/anecdote';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the ResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultat',
  templateUrl: 'resultat.html',
})
export class ResultatPage {

  nextPage = AnecdotePage;
  private infos;
  private params;
  private imgPath = '../../assets/imgs/full/';

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultatPage');
  }

}
