import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, App, Platform } from "ionic-angular";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

//Variables
import { environment } from '../../environment';

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

  openPage(page: any, params?) {
    let options: NativeTransitionOptions = {
      'duration': 300
    };

    this.nativePageTransitions.slide(options);
    this.navCtrl.push(page, { 'infos': environment, 'params': params }, { 'animate': false });
    console.log(environment, params);
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
