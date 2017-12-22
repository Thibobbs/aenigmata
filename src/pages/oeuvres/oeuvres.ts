import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Slides } from 'ionic-angular';

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

  nextPage = 'RecherchePage';
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
        this.showAlertUnlock(index);
      }
    });
    this.storage.get('endRoom').then(index => {
      if(index != null) {
        this.storage.remove('endRoom').then(() => {
          console.log('unlock endRoom');
        });
        this.showAlertEndRoom(index);
      }
    });
  }

  showAlertStart(data) {
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

  showAlertUnlock(data) {
    let alert = this.alertCtrl.create();
    let buttonOptions = {
      text: 'CONTINUER',
      handler: () => {
        console.log('data', data);
        this.goToUnlock(data+1);
      }
    }
    alert.setTitle('BRAVO !');
    alert.setSubTitle('Tu as débloqué l\'oeuvre ' + (data + 2));
    alert.addButton(buttonOptions);
    alert.present();
  }

  showAlertEndRoom(data) {
    let alert = this.alertCtrl.create();
    let buttonOptions = {
      text: 'CONTINUER'
    }
    alert.setTitle('BRAVO !');
    alert.setSubTitle('Tu as finis la ' + this.infos[this.params.aile].salles[this.params.salle].name);
    alert.addButton(buttonOptions);
    alert.present();
  }

  checkOeuvre(index) {
    if(!this.infos[this.params.aile].salles[this.params.salle].oeuvres[index].locked) {
      if(!this.infos[this.params.aile].salles[this.params.salle].oeuvres[index].done) {
        this.showAlertStart({ 'index': index });
      }
      else {
        this.params.oeuvre = index;
        this.navigate.openPage('AnecdotePage', this.params, true);
      }
    }
  }

  goToUnlock(index) {
    console.log('slide', index);
    this.slides.slideTo(index, 300);
  }

}
