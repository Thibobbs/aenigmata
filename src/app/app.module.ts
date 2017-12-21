import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Modules
import { HttpClientModule } from '@angular/common/http';

//Pages
import { AilesPage } from '../pages/ailes/ailes';
import { AilesPageModule } from '../pages/ailes/ailes.module';
import { SallesPage } from '../pages/salles/salles';
import { SallesPageModule } from '../pages/salles/salles.module';
import { OeuvresPage } from '../pages/oeuvres/oeuvres';
import { OeuvresPageModule } from '../pages/oeuvres/oeuvres.module';
import { RecherchePage } from '../pages/recherche/recherche';
import { RecherchePageModule } from '../pages/recherche/recherche.module';
import { ScanPage } from '../pages/scan/scan';
import { ScanPageModule } from '../pages/scan/scan.module';
import { ResultatPage } from '../pages/resultat/resultat';
import { ResultatPageModule } from '../pages/resultat/resultat.module';
import { AnecdotePage } from '../pages/anecdote/anecdote';
import { AnecdotePageModule } from '../pages/anecdote/anecdote.module';

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
    //PagesModule
    AilesPageModule,
    SallesPageModule,
    OeuvresPageModule,
    RecherchePageModule,
    ScanPageModule,
    ResultatPageModule,
    AnecdotePageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //Pages
    AilesPage,
    SallesPage,
    OeuvresPage,
    RecherchePage,
    ScanPage,
    ResultatPage,
    AnecdotePage
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
