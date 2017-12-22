import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

//Pages
//import { RecherchePage } from '../recherche/recherche';

//Provider
import { NavigationProvider } from '../../providers/navigation/navigation';
import { RecognizeProvider } from '../../providers/recognize/recognize';

//Plugin
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  private infos;
  private params;
  public base64Image: string;
  public result;
  callbackParameters;

  constructor(public navCtrl: NavController, public navParams: NavParams, private navigate: NavigationProvider, private camera: Camera, private loadingCtrl: LoadingController, private recognize: RecognizeProvider) {
    this.infos = navParams.get('infos');
    this.params = navParams.get('params');
    this.callbackParameters = this.params.callbackParameters;

    this.takePicture();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  ionViewWillEnter() {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 700,
      targetHeight: 700,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.analysePicture(imageData);
    }, err => {
      // Handle error
      console.log(err);
      let data = {
        infos: this.infos,
        params: this.params
      }
      this.sendParameters(data);
    });
  }

  analysePicture(img) {
    let loader = this.loadingCtrl.create({
      content: 'VERIFICATION ...',
      duration: 10000
    });
    loader.present();

    this.recognize.recognizeImg(img, result => {
      this.saveResult(result);
      loader.dismiss();

      let data = {
        infos: this.infos,
        params: this.params,
        result: this.result
      }
      this.sendParameters(data);
    });
  }

  saveResult(result) {
    console.log(result);
    if (result.status !== 0) {
      this.result = false;
    }
    else {
      if (result.objects[0].id !== this.infos[this.params.aile].salles[this.params.salle].oeuvres[this.params.oeuvre].id) {
        this.result = false;
      }
      else {
        this.result = true;
      }
    }
  }

  sendParameters(params) {
    this.callbackParameters(params).then(()=>{
      this.navCtrl.pop();
    });
  }

}
