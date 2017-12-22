import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';

//Pages
import { RecherchePage } from '../recherche/recherche';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

//Plugin
import { Storage } from '@ionic/storage';

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

  @ViewChild(Slides) slides: Slides;

  nextPage = RecherchePage;
  private infos;
  private params;
  private unlock;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private navigate: NavigationProvider, private storage: Storage) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OeuvresPage');
  }

  ionViewWillEnter() {
    this.storage.get('infos').then(val => {
      this.infos = val;
    });
    this.storage.get('unlock').then(index => {
      if(index != null) {
        this.unlock = index;
        this.storage.remove('unlock').then(() => {
          console.log('unlock removed');
        });
        this.goToUnlock(index);
      }
    });
  }

  showAlert(data) {
    let params = this.params;
    params.oeuvre = data.index;

    let alert = this.alertCtrl.create();
    let buttonOptions = {
      text: 'COMMENCER',
      handler: () => {
        this.navigate.openPage(this.nextPage, params, true);
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

  goToUnlock(index) {
    console.log('slide', index);
    this.slides.slideTo(index+1, 300);
  }

}
