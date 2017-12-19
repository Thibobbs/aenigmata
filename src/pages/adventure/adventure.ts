import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RulesPage } from '../rules/rules';

@Component({
  selector: 'page-adventure',
  templateUrl: 'adventure.html'
})
export class AdventurePage {

  constructor(public navCtrl: NavController) {

  }


  private showAdventure() {
    this.navCtrl.push(RulesPage);
  }
}
