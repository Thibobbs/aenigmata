import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdventurePage } from '../adventure/adventure';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private showAdventure() {
    this.navCtrl.push(AdventurePage);
  }

}
