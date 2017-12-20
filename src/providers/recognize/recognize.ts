import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Variables
import { environment } from '../../environment';

//Plugin
import Recognize from 'recognize.im';

/*
  Generated class for the RecognizeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecognizeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RecognizeProvider Provider');

    Recognize.setCredentials(environment.recognizeConfig.clientID, environment.recognizeConfig.APIKey, environment.recognizeConfig.CLAPIKey);

    Recognize.on("error", function(msg){
      console.log("Recognize.im connection error: " + msg);
    });

    Recognize.on('success', function(data) {
      console.log("Recognize.im connection success: " + data);
    });
  }

  recognizeImg(base64Image, callback) {
    Recognize.recognize(base64Image, callback)
  }
}
