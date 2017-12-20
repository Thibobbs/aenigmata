import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { AilesPage } from '../ailes/ailes';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage = AilesPage;

  constructor(public navCtrl: NavController, private navigate: NavigationProvider) {

  }

}
