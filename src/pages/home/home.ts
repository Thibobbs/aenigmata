import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { WingsPage } from '../wings/wings';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextPage = WingsPage;

  constructor(public navCtrl: NavController, private navigate: NavigationProvider) {

  }

}
