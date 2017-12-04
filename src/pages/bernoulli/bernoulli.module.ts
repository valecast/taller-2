import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BernoulliPage } from './bernoulli';

@NgModule({
  declarations: [
    BernoulliPage,
  ],
  imports: [
    IonicPageModule.forChild(BernoulliPage),
  ],
})
export class BernoulliPageModule {}
