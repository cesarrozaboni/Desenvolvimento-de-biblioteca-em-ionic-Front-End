import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoProvider } from "../../providers/carrinho";
import { iLivro } from "../../interfaces/iLivro";
//import { AutorProvider } from "../../providers/autor";
//import { LivroProvider } from "../../providers/livro"
//import { LivroAutorProvider } from "../../providers/livro-autor";
import { CategoriaProvider } from "../../providers/categoria"

/**
 * Generated class for the LivroAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  //private livros: iLivro[] = [];

  selectedItem: any;
  items: Array<iLivro>;
  livro: iLivro;
  itemsFilter : Array<iLivro>;
  //modoEdicao: boolean;
  //icons: string[];
  //categorias: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public categoriaProvider: CategoriaProvider,
    public carrinhoProvider: CarrinhoProvider, public alertCtrl: AlertController,) {
 
    this.items = carrinhoProvider.getLivros();

  
  }

 removeLivro(event){

  let confirmar = this.alertCtrl.create({
    title: 'Confirmação',
    message: 'Deseja excluir esse registro?',
    buttons: [
      {
        text: 'Cancelar',
        handler: () => {
          //console.log('Disagree clicked');
        }
      },
      {
        text: 'Excluir',
        handler: () => {
          console.log("aqui");
         // console.log(items);
          console.log(this.items);

          this.carrinhoProvider.removerLivro(this.items);
          
          //this.navCtrl.pop();
          console.log("depois do this.carrinhoProvider.removerLivro");
        }
      }
    ]
  });

  confirmar.present();
}
confirmarPedido(event){

  let confirmar = this.alertCtrl.create({
    title: 'Confirmação',
    message: 'Confirmar Pedido de entrega?',
    buttons: [
      {
        text: 'Cancelar',
        handler: () => {
          //console.log('Disagree clicked');
        }
      },
      {
        text: 'Confirmar',
        handler: () => {
          console.log("pedido confirmado");
          
        }
      }
    ]
  });

  confirmar.present();
}
 
        }


