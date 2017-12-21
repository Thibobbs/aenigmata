import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';


// PAGE
import { RulesPage } from '../rules/rules';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }



  private slidePage() {
  
    this.navCtrl.push(RulesPage);
  }

}
