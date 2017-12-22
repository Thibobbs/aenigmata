import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Modules
import { HttpClientModule } from '@angular/common/http';

//Plugins
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';

//Providers
import { NavigationProvider } from '../providers/navigation/navigation';
import { RecognizeProvider } from '../providers/recognize/recognize';

//Components
import { TimerComponent } from '../components/timer/timer'

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Modules
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Modules
    //Plugins
    NativePageTransitions,
    Camera,
    //Providers
    NavigationProvider,
    RecognizeProvider,
    //Components
    TimerComponent
  ]
})
export class AppModule {}
