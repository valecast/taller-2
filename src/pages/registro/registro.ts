import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FirebaseService } from '../../providers/firebase-service/firebase-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  public signupForm: FormGroup;
  loading: Loading;

  constructor(public navCtrl: NavController, public firebaseService: FirebaseService,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      name: ['', Validators.compose([Validators.minLength(3), Validators.required])],
      apellido: ['', Validators.compose([Validators.minLength(3), Validators.required])],
    });
  }

  signupUser() {
    if (this.signupForm.valid) {
      this.loading = this.loadingCtrl.create();
      this.loading.present();

      this.firebaseService.signUp(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.name, this.signupForm.value.apellido)
        .then(() => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot('LoginPage');
          });
        }, (error) => {
          this.loading.dismiss().then(() => {
            let alert = this.alertCtrl.create({
              title: 'Error',
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
    }
  }
  creditos(){
    this.navCtrl.push('CreditosPage');
  }
}