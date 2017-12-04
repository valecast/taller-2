import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoissonPage } from './poisson';

@NgModule({
  declarations: [
    PoissonPage,
  ],
  imports: [
    IonicPageModule.forChild(PoissonPage),
  ],
})
export class PoissonPageModule {}
