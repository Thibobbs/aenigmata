import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Variables
//import { environment } from '../../environment';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the ReglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regle',
  templateUrl: 'regle.html',
})
export class ReglePage {

  nextPage = 'SallesPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReglePage');
  }

}
