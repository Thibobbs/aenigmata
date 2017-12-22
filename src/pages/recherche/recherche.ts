import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//Pages
import { ResultatPage } from '../resultat/resultat';
import { ScanPage } from '../scan/scan';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

//Components
import { TimerComponent } from '../../components/timer/timer';

//Plugin
import { Storage } from '@ionic/storage';

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

  nextPage = ResultatPage;
  private infos;
  private params;
  result;
  private extractPath = '../../assets/imgs/extract/';

  callbackParameters = data => {
    return new Promise((resolve, reject) => {
      this.infos = data.infos;
      this.params = data.params;
      this.result = data.result;
      console.log(data);
      resolve();
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private navigate: NavigationProvider, public timer: TimerComponent, private storage: Storage) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');

    this.Timer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecherchePage');
  }

  ionViewWillEnter() {
    if (this.result !== undefined) {
      this.onResult(this.result);
    }
  }

  onResult(result) {
    if(result) {
      this.onSuccess(result);
    }
    else {
      this.onFail(result);
    }
  }

  onSuccess(result) {
    this.timer.pauseTimer();
    this.unlockNext(this.params.oeuvre);
    this.setDone(this.params.oeuvre);
    this.navigate.openPage(this.nextPage, { 'aile': this.params.aile, 'salle': this.params.salle, 'oeuvre': this.params.oeuvre, 'unlock': this.params.oeuvre }, true);
  }

  onFail(result) {
    let alert = this.alertCtrl.create();
    let options = {
      text: 'REESSAYE !'
    }
    alert.setTitle('DOMMAGE');
    alert.setSubTitle('Tu n\'as pas trouvé le bon tableau.');
    alert.addButton(options);
    alert.present();
  }

  Timer() {
    this.timer.ngOnInit();
  }

  unlockNext(index) {
    if(this.infos[this.params.aile].salles[this.params.salle].oeuvres[index+1]) {
      this.infos[this.params.aile].salles[this.params.salle].oeuvres[index+1].locked = false;
      this.storage.set('infos', this.infos);
      this.storage.set('unlock', index);
    }
    else {
      this.storage.set('endRoom', this.infos[this.params.aile].salles[this.params.salle]);
    }
  }

  setDone(index) {
    this.infos[this.params.aile].salles[this.params.salle].oeuvres[index].done = true;
    this.storage.set('infos', this.infos);
  }
}
