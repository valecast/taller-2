import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as stat from "simple-statistics";
import * as math from "mathjs";


@Component({
  selector: 'page-binomial',
  templateUrl: 'binomial.html'
})
export class BinomialPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text3 = "";
  public text4 = "";
  public text5 = "";
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binp: ['', Validators.compose([Validators.required])],
      binx: ['', Validators.compose([Validators.required])],
      binn: ['', Validators.compose([Validators.required])],
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>La distribución Binomial es una generalización de la distribución Bernoulli a $n$ eventos dicotómicos.</p>";
    var text2 = "<p>Es uno de los modelos discretos de mayor uso junto con el modelo Poisson. La población de estudio es dicotómica, sobre la cual se toma una muestra de $n$ variables dicotómicas Bernoulli.  El problema de interés es determinar la probabilidad de ocurrencia de $x$ éxitos o elementos con la característica de interés en la muestra. </p>";
    var text21 = "<p>En este contexto se dirá que la variable aleatoria de estudio se distribuye Binomial de parámetros $n$ y $p$.</p>";
    var text22 = "<p style='text-align: center;'>$X \\sim  Ber(n,p)$</p>";
    var text23 = "<p>El valor de $p$ es contante atreves de todos los ensayos o para asegurar ello debe existir devolución.</p>";
    //var text3 = "<p>Entonces la probabilidad de que ocurra exactamente $X$ veces en $N$ intentos (o sea, $X$ éxitos y $N-X$ fracasos) viene dada por:</p>";
    //var text4 = "<p style='text-align: center;'>$p(X) = \\binom{N}{X}p^{X}q^{N-X}=\\frac{N!}{X!(N-X)!}p^{X}q^{N-X}$</p>"
    //var text5 = "<p>Donde $X = 0, 1, 2, ..., N$<p><p>$N! = N(N-1)(N-2) \\dots 1$</p><p>Y $0! = 1$ por definición</p>";
   
    this.def_text = text1 + text2 + text21 + text22 + text23;

    this.text3 = "<p>$p$: Prob. de éxito, valor entre $0$ y $1$, ambos incluidos.</p>";
    this.text4 = "<p>$n$: Tamaño de la muestra (número entero).</p>";
    this.text5 = "<p>$x$: Número de éxitos esperados (número entero).</p>";
    this.par_text = this.text3 + this.text4 + this.text5;
  }

  binomialCalc(){

    var p = Number(this.prueba.value.binp);
    var n = Number(this.prueba.value.binn);
    var x = Number(this.prueba.value.binx);

    if((n>=0) && !math.isNaN(x) && !math.isNaN(p) && p >= 0 && p <= 1){
      var binomial = (stat.factorial(n) / (stat.factorial(x) * stat.factorial(n - x))) * Math.pow(p,x) * Math.pow(1-p,n-x);
      var suma: Array<Number> = [];
      for(var i = 0; i <= parseInt(x.toString()); i = i+1){
        var flag = (stat.factorial(n)/(stat.factorial(i)*stat.factorial(n - i)))*Math.pow(p,i)*Math.pow(1-p,n-i);
        suma.push(flag);
      }

      var EX = n * p;
      var VX = n * p * (1 - p);

      if(binomial >= 0 && n>=0 && p >= 0 && x >= 0 && p <= 1 && x <= n){
        this.visible = true;
        this.res_text = "<p>$p(X= " + x + ")=" + binomial.toFixed(3) + "$</p><p>$p(X\\leq" + x + ")=" + (stat.sumSimple(suma)).toFixed(3) + "$</p><p>$E(X)=" + EX.toFixed(3) + "$</p><p>$V(X)="+ VX.toFixed(3) + "$</p>";
        this.buttonDisabled = true;
      }else{
        this.visible = false;
        let alert = this.alertCtrl.create({
          title: "Error de Cálculo",
          message: 'Revise los parámetros',
          buttons: ['OK']
        });
        alert.present();
      }
    }else{
      this.visible = false;
      let alert = this.alertCtrl.create({
        title: "Error de Cálculo",
        message: 'Debe ingresar un valor entre `0` y `1` inclusive',
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
