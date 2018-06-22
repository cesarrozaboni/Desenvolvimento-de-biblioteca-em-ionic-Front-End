import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  infoCard = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) 
    {
      this.infoCard = {
      nome: "Olavo Silva",
      data: "1 de maio de 2010",
      likes: 100,
      comentarios: 50
    };
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

}
