import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MathJaxDirective } from '../directives/math-jax/math-jax';
import { BernoulliPage } from '../pages/bernoulli/bernoulli';
import { BinomialPage } from '../pages/binomial/binomial';
import { ChiPage } from '../pages/chi/chi';
import { ExponencialPage } from '../pages/exponencial/exponencial';
import { HipergeometricaPage } from '../pages/hipergeometrica/hipergeometrica';
import { NormalPage } from '../pages/normal/normal';
import { PoissonPage } from '../pages/poisson/poisson';
import { TstudentPage } from '../pages/tstudent/tstudent';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from '../providers/firebase-service/firebase-service';

let firebaseConfig = {
  apiKey: "AIzaSyDxLM4G9LjfKL72fZVVD49KHcjElTpA-jw",
  authDomain: "cmc6412-eab86.firebaseapp.com",
  databaseURL: "https://cmc6412-eab86.firebaseio.com",
  projectId: "cmc6412-eab86",
  storageBucket: "cmc6412-eab86.appspot.com",
  messagingSenderId: "826249457922"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BernoulliPage,
    BinomialPage,
    ChiPage,
    ExponencialPage,
    HipergeometricaPage,
    NormalPage,
    PoissonPage,
    TstudentPage,
    MathJaxDirective,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BernoulliPage,
    BinomialPage,
    ChiPage,
    ExponencialPage,
    HipergeometricaPage,
    NormalPage,
    PoissonPage,
    TstudentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService
    ]
})
export class AppModule {}
