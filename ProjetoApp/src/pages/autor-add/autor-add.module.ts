import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorAddPage } from './autor-add';

@NgModule({
  declarations: [
    AutorAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AutorAddPage),
  ],
})
export class AutorAddPageModule {}
