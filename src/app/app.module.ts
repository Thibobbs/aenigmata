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

//Plugins
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

//Providers
import { NavigationProvider } from '../providers/navigation/navigation';

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
    SallesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //Pages
    AilesPage,
    SallesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Modules
    //Plugins
    NativePageTransitions,
    //Providers
    NavigationProvider
  ]
})
export class AppModule {}
