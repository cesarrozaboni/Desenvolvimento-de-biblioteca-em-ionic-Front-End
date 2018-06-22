import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TapClick} from 'ionic-angular';
import { trigger, state, style, transition, animate } from "@angular/animations";

/**
 * Generated class for the AnimacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animacoes',
  templateUrl: 'animacoes.html',
  animations: [
    trigger('meuEfeito', [
      state('estadoVisivel', style({
        opacity: 1
      })),
      state('estadoInvisivel', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ]),
  ]
})
export class AnimacoesPage {

  estadoAnimacao = 'estadoVisible';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tapEvent = function (e){
      this.tap++;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimacoesPage');
  }

  criarEfeito() {
    this.estadoAnimacao = (this.estadoAnimacao == 'estadoVisivel') ?
      'estadoInvisivel' : 'estadoVisivel';
  }

}
