import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Variables
import { environment } from '../../environment';

//Pages
import { AilesPage } from '../ailes/ailes';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

//Plugin
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage = AilesPage;

  constructor(public navCtrl: NavController, private navigate: NavigationProvider, private storage: Storage) {
    this.checkStorage();
  }

  checkStorage() {
    this.storage.ready().then(() => {
      this.storage.get('infos').then(val => {
        console.log(val);
        if (!val) {
          this.storage.set('infos', environment.ailes);
        }
      });
    });
  }

}
