import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import * as jstat from "jStat";
import * as math from "mathjs";

@Component({
  selector: 'page-chi',
  templateUrl: 'chi.html'
})
export class ChiPage {
  public prueba;
  public visible: Boolean;
  public def_text : String ;
  public par_text: String;
  public res_text: String;
  public text3 = "";
  public text4 = "";
  public buttonDisabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.prueba = formBuilder.group({
      binx: ['', Validators.compose([Validators.required])],
      bindof: ['', Validators.compose([Validators.required])],
    });
    var text1 = "<p>Es una distribución de variables aleatorias continuas, con soporte positivo. Su función de densidad presenta un comportamiento asimétrico positivo. Puede ser generada a partir de una variable aleatoria normal estándar. Para la determinación de probabilidades es necesario de la especificación del tamaño muestral o los grados de libertad ($\\nu$).</p>";
    this.def_text = text1;

    this.text3 = "<p>$x$</p>";
    this.text4 = "<p>$\\nu$: Grados de Libertad</p>";
    this.par_text = this.text4 + this.text3;
  }


  chiCalc(){

    var x = Number(this.prueba.value.binx);
    var dof = Number(this.prueba.value.bindof);
    var chi = NaN;

    if((x>=0) && !math.isNaN(x) && !math.isNaN(dof)){
      chi = jstat.jStat.chisquare.pdf(x, dof);

      if(!math.isNaN(chi)){
        this.visible = true;
        this.res_text = "<p>$p(X\\leq" + x + ")=" + chi.toFixed(3) + "$</p>";
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
