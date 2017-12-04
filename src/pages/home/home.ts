import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { BernoulliPage } from '../bernoulli/bernoulli';
import { BinomialPage } from '../binomial/binomial';
import { ChiPage } from '../chi/chi';
import { ExponencialPage } from '../exponencial/exponencial';
import { HipergeometricaPage } from '../hipergeometrica/hipergeometrica';
import { NormalPage } from '../normal/normal';
import { PoissonPage } from '../poisson/poisson';
import { TstudentPage } from '../tstudent/tstudent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }


  bernoulli(){
    this.navCtrl.push(BernoulliPage);
  }

  binomial(){
    this.navCtrl.push(BinomialPage);
  }

  poisson(){
    this.navCtrl.push(PoissonPage);
  }

  hipergeometrica(){
    this.navCtrl.push(HipergeometricaPage);
  }

  exponencial(){
    this.navCtrl.push(ExponencialPage);
  }

  normal(){
    this.navCtrl.push(NormalPage);
  }

  creditos(){
    this.navCtrl.push('CreditosPage');
  }

  chi(){
    this.navCtrl.push(ChiPage);
  }

  tstudent(){
    this.navCtrl.push(TstudentPage);
  }

}
