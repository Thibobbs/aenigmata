import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//Pages
import { RecherchePage } from '../recherche/recherche';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

/**
 * Generated class for the OeuvresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oeuvres',
  templateUrl: 'oeuvres.html',
})
export class OeuvresPage {

  nextPage = RecherchePage;
  private infos;
  private params;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private navigate: NavigationProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OeuvresPage');
  }

  showAlert(data) {
    let params = this.params;
    params.oeuvre = data.index;

    let alert = this.alertCtrl.create();
    let buttonOptions = {
      text: 'COMMENCER',
      handler: () => {
        this.navigate.openPage(this.nextPage, params);
      }
    }
    alert.setTitle('TABLEAU ' + (params.oeuvre + 1));
    alert.setSubTitle('4 minutes');
    alert.addButton(buttonOptions);
    alert.present();
  }

  checkOeuvre(index) {
    if(!this.infos[this.params.aile].salles[this.params.salle].oeuvres[index].locked) {
       this.showAlert({ 'index': index })
    }
  }

}
