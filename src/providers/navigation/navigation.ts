import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, App, Platform } from "ionic-angular";

//Variables
import { environment } from '../../environment';

//Plugin
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/*
  Generated class for the NavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavigationProvider {

  private navCtrl: NavController

  constructor(public http: HttpClient, private nativePageTransitions: NativePageTransitions, private app: App, public platform: Platform) {
    console.log('Hello NavigationProvider Provider');

    this.navCtrl = app.getActiveNavs()[0];

    this.platform.registerBackButtonAction( () => {
      if (this.navCtrl.getPrevious()) {
        this.closePage();
      }
    });
  }

  openPage(page: any, params?, fade?, root?) {
    let navType;
    if(!root) {
      navType = 'push';
    }
    else {
      navType = 'setRoot';
    }
    if (!fade) {
      let options: NativeTransitionOptions = {
        'duration': 300
      };

      this.nativePageTransitions.slide(options);
      this.navCtrl[navType](page, { 'infos': environment.ailes, 'params': params }, { 'animate': false });
    } else {
      this.navCtrl[navType](page, { 'infos': environment.ailes, 'params': params });
    }
    console.log(environment, params, fade);
  }

  closePage() {
    let options: NativeTransitionOptions = {
      'direction': 'right',
      'duration': 300
    };
    this.nativePageTransitions.slide(options);
    this.navCtrl.pop({ 'animate': false });
  }

}
