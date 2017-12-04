import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TstudentPage } from './tstudent';

@NgModule({
  declarations: [
    TstudentPage,
  ],
  imports: [
    IonicPageModule.forChild(TstudentPage),
  ],
})
export class TstudentPageModule {}
