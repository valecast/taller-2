import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BernoulliPage } from '../pages/bernoulli/bernoulli';
import { BinomialPage } from '../pages/binomial/binomial';
import { ChiPage } from '../pages/chi/chi';
import { ExponencialPage } from '../pages/exponencial/exponencial';
import { HipergeometricaPage } from '../pages/hipergeometrica/hipergeometrica';
import { NormalPage } from '../pages/normal/normal';
import { PoissonPage } from '../pages/poisson/poisson';
import { TstudentPage } from '../pages/tstudent/tstudent';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pagesDiscretas: Array<{title: string, component: any}>;
  pagesContinuas: Array<{title: string, component: any}>;
  pagesInicio: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public StatusBar: StatusBar, public SplashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pagesInicio = [
      { title: 'Inicio', component: HomePage }
    ];

    this.pagesDiscretas = [
      { title: 'Bernoulli', component: BernoulliPage},
      { title: 'Binomial', component: BinomialPage},
      { title: 'Poisson', component: PoissonPage},
      { title: 'Hipergeométrica', component: HipergeometricaPage}
    ];

    this.pagesContinuas = [
      { title: 'Normal', component: NormalPage},
      { title: 'Exponencial', component: ExponencialPage},
      { title: 'Chi Cuadrado', component: ChiPage},
      { title: 'T-Student', component: TstudentPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.StatusBar.styleDefault();
      this.SplashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
