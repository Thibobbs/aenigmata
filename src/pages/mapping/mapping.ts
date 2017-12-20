import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the MappingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapping',
  templateUrl: 'mapping.html',
})
export class MappingPage {

  nextPage;
  private infos;
  private params;

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
    console.log(this.infos, this.params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MappingPage');
  }

}
