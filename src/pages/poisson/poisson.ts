import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as jstat from "jStat";
import * as stat from "simple-statistics";

@Component({
  selector: 'page-poisson',
  templateUrl: 'poisson.html'
})

export class PoissonPage {
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
      binlambda: ['', Validators.compose([Validators.required])],
      binx: ['', Validators.compose([Validators.required])]
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>La distribución Poisson al igual que la Binomial, es un modelo para variables aleatorias discretas, sin embargo esta se caracteriza por contar ocurrencias del evento de interés por unidad de medida, por ejemplo tiempo, volumen, superficie, etc.</p>";
    var text2 = "<p>Es uno de los modelos discretos de mayor uso, que puede realizar estimaciones de probabilidad para variables binomiales e hipergeométricas.  El problema de interés es determinar la probabilidad de ocurrencia de x éxitos o elementos con la característica de interés en un determinado tiempo, espacio, volumen, superficie, etc.";
    var text3 = "<p>En este contexto se dirá que la variable aleatoria de estudio se distribuye Poisson de parámetro $\\lambda$</p>";
    var text4 = "<p style='text-align: center;'>$X \\sim P_{0}(\\lambda)$</p>";
    var text5 = "<p>El valor de $\\lambda$ en el modelo Poisson es coincidente con la esperanza y la varianza, por tanto no es una probabilidad y generalmente los problemas serán enunciados en relación a $\\lambda$.</p>"

    this.def_text = text1 + text2 + text3 + text4 + text5;
    //`p(X = r) = \binom{n}{r}p^{r}(1-p)^{n-r}`//
    this.text6 = "<p>$\\lambda = np$</p>";
    var text6 = "<p>$\\lambda = np$</p>";
    this.text7 = "<p>$x$: Numero de éxitos por unidad de análisis.</p>";
    var text7 = "<p>$x$: Numero de éxitos por unidad de análisis.</p>";

    this.par_text = text6 + text7;
  }

  poissonCalc(){

    var lambda = Number(this.prueba.value.binlambda);
    var x = Number(this.prueba.value.binx);

    if(lambda>=0 && !isNaN(x) && x>=0){
      var poisson = jstat.jStat.poisson.pdf(x, lambda);
      var suma: Array<Number> = [];

      for(var i = 0; i <= parseInt(x.toString()); i = i+1){
        var flag = jstat.jStat.poisson.pdf(i, lambda);
        suma.push(flag);
      }
      if(poisson >= 0){
        this.visible = true;
        this.res_text = "<p>$p(X= " + x + ")=" + poisson.toFixed(3) + "$</p><p>$p(X\\leq" + x + ")=" + (stat.sumSimple(suma)).toFixed(3) + "$</p><p>$E(X)=" + lambda.toFixed(3) + "$</p><p>$V(X)="+ lambda.toFixed(3) + "$</p>";
        this.buttonDisabled = true;
      }
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Debe ingresar parámetros válidos.',
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
