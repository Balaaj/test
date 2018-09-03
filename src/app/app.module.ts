import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { firebaseCredentials } from './firebase.credientials';
import { AngularFireDatabaseModule } from 'angularfire2/database'

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // initialize angular fire credientials from dashboard
    AngularFireModule.initializeApp(firebaseCredentials),
    // import firebase database to use database interaction
    AngularFireDatabaseModule,
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
