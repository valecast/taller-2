import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Creditos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html'
})
export class CreditosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('CreditosPage');
  }

}
