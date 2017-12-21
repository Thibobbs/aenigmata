import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';



// PAGES
import { HomePage } from '../pages/home/home';
import { RulesPage } from '../pages/rules/rules';
import { RoomChoicePage } from '../pages/room-choice/room-choice';
import { GameLevelPage} from '../pages/game-level/game-level';
import { RoomTestPage} from '../pages/room-test/room-test';
import { ResultPage} from '../pages/result/result';
import { DidYouKnowPage} from '../pages/did-you-know/did-you-know';



//PLUGIN
// import { NativePageTransitions } from '@ionic-native/native-page-transitions';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RulesPage,
    RoomChoicePage,
    GameLevelPage,
    RoomTestPage,
    ResultPage,
    DidYouKnowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RulesPage,
    RoomChoicePage,
    GameLevelPage,
    RoomTestPage,
    ResultPage,
    DidYouKnowPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
