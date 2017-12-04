import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as stat from "simple-statistics";
import * as math from "mathjs";

@Component({
  selector: 'page-hipergeometrica',
  templateUrl: 'hipergeometrica.html'
})
export class HipergeometricaPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text6: String;
  public text7: String;
  public text8: String;
  public text9: String;
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binx: ['', Validators.compose([Validators.required])],
      binn: ['', Validators.compose([Validators.required])],
      binA: ['', Validators.compose([Validators.required])],
      binN: ['', Validators.compose([Validators.required])],
    });
    //this.formulae="`sum_(i=1)^n i^3=((n(n+1))/2)^2`";
    var text1 = "<p>La distribución Hipergeométrico, es un modelo para variables aleatorias discretas, en un contexto de poblaciones finitas y dicotómicas. Se caracteriza por contar ocurrencias del evento de interés en una muestra de tamaño $n$. Una característica clave de este modelo, es que se conoce cuantas componentes de la población poseen la característica de interés.</p>";
    var text2 = "<p>El problema de interés es determinar la probabilidad de ocurrencia de $x$ éxitos o elementos con la característica de interés en la muestra seleccionada. En este contexto se dirá que la variable aleatoria de estudio se distribuye Hipergeométrica de parámetro $n$, $k$, $N$.</p>";
    var text3 = "<p style='text-align: center;'>$X \\sim H(n,k,N)$</p>";

    this.def_text = text1 + text2 + text3;
    //`p(X = r) = \binom{n}{r}p^{r}(1-p)^{n-r}`//
    this.text6 = "<p>$x$: Nº de éxitos esperados en una muestra de tamaño $n$.</p>";
    var text6 = "<p>$x$: Nº de éxitos esperados en una muestra de tamaño $n$.</p>";
    this.text7 = "<p>$n$: Tamaño de la muestra</p>";
    var text7 = "<p>$n$: Tamaño de la muestra</p>";
    this.text8 = "<p>$k$: Número de éxitos conocidos</p>";
    var text8 = "<p>$k$: Número de éxitos conocidos</p>";
    this.text9 = "<p>$N$: Nº de la población</p>";
    var text9 = "<p>$N$: Nº de la población</p>";

    this.par_text = text7 + text8 + text9 + text6;
  }

  hipergeometricaCalc(){

    var x = Number(this.prueba.value.binx);
    var n = Number(this.prueba.value.binn);
    var A = Number(this.prueba.value.binA);
    var N = Number(this.prueba.value.binN);

    if(!math.isNaN(x) && !math.isNaN(n) && !math.isNaN(A) && !math.isNaN(N) && N > n && A>x && Number.isInteger(x) && Number.isInteger(n) && Number.isInteger(A) && Number.isInteger(N)){
      var hipergeometrica = (math.combinations(A, x) * math.combinations(N-A, n-x))/(math.combinations(N, n));
      var suma: Array<Number> = [];

      for(var i = 0; i <= parseInt(x.toString()); i = i+1){
        var flag = (math.combinations(A, i) * math.combinations(N-A, n-i))/(math.combinations(N, n));
        suma.push(flag);
      }
      if(hipergeometrica>=0){
        this.visible = true;
        this.res_text = "<p>$p(X= " + x + ")=" + hipergeometrica.toFixed(3) + "$</p><p>$p(X\\leq" + x + ")=" + (stat.sumSimple(suma)).toFixed(3) + "$</p>";
        this.buttonDisabled = true;
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