
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
//import * as stat from "simple-statistics";
import * as math from "mathjs";


@Component({
  selector: 'page-exponencial',
  templateUrl: 'exponencial.html'
})
export class ExponencialPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text6: String;
  public text7: String;
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binE: ['', Validators.compose([Validators.required])],
      binx: ['', Validators.compose([Validators.required])]
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>La distribución Exponencial estudia fenómenos relacionados comunmente por la Teoría de Colas, como por ejemplo los tiempos de espera.</p>";
    var text2 = "<p>La siguiente función de densidad de probabilidad define la distribución exponencial:</p>";
    var text3 = "<p style='text-align: center;'>$f(x) = \\begin{cases} & \\lambda e^{-\\lambda x} \\text{ ; } \\lambda > 0; x \\geqslant 0 & 0 \\text{ ; otros} \\end{cases}$</p>";
    var text4 = "<p>Para esta distribución se verifica que: </p>";
    var text5 = "<p>$P(X \\leqslant x)=1-e^{-\\lambda x}$</p>"
    var text51 = "<p>$P(X > x)=e^{-\\lambda x}$</p>"
    var text52 = "<p>$P(a \\leqslant X \\leqslant b)=e^{-\\lambda a} - e^{-\\lambda b}$</p>"
    var text53 = "<p>$E(X) = \\frac{1}{\\lambda} \\Rightarrow \\lambda = \\frac{1}{E(X)}$, en donde $E(X)$ corresponde a la esperanza o promedio de los datos que se tienen.</p>"
    var text54 = "<p>$V(X) = \\frac{1}{\\lambda^{2}}$</p>"

    this.def_text = text1 + text2 + text3 + text4 + text5 + text51 + text52 + text53 + text54;
    //`p(X = r) = \binom{n}{r}p^{r}(1-p)^{n-r}`//
    this.text6 = "<p>$E(X)$: Esperanza o promedio de los datos que se tienen</p>";
    var text6 = "<p>$E(X)$: Esperanza o promedio de los datos que se tienen</p>";

    this.par_text = text6;
    this.text7 = "<p>$P(X \\leqslant x)$</p>"
  }

  exponencialCalc(){
    var E = Number(this.prueba.value.binE);
    var x = Number(this.prueba.value.binx);

    if(!math.isNaN(E) && !math.isNaN(x)){
      var lambda = 1/E;
      var exponencial = 1 - Math.exp(-lambda * x);
      
      if(exponencial>=0){
        this.visible = true;
        this.res_text = "<p>$\\lambda = " + lambda.toFixed(3) + "$</p><p>$P(X \\leqslant " + x + ")=" + exponencial.toFixed(3) + "$</p>";
        this.buttonDisabled = true;
      }else{
        this.visible = false;
        let alert = this.alertCtrl.create({
          title: "Error de Cálculo",
          message: 'Verifique que los parametrós ingresados sean coherentes para realizar el cálculo',
          buttons: ['OK']
        });
        alert.present();
      }

    }else{
        this.visible = false;
        let alert = this.alertCtrl.create({
          title: "Error de Cálculo",
          message: 'Verifique que los parametrós ingresados sean coherentes para realizar el cálculo',
          buttons: ['OK']
        });
        alert.present();
    } 
  }

  reset(){
    this.prueba.reset();
    this.buttonDisabled = false;
    this.visible = false;
    this.res_text = null;
  }

}