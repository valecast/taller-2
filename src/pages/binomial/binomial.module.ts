import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BinomialPage } from './binomial';

@NgModule({
  declarations: [
    BinomialPage,
  ],
  imports: [
    IonicPageModule.forChild(BinomialPage),
  ],
})
export class BinomialPageModule {}
