import { Component, Input } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LivroProvider } from "../../providers/livro";
import { iLivro } from "../../interfaces/iLivro";

import {LivroAddPage} from "../livro-add/livro-add";
import {LivroDetailsPage} from "../livro-details/livro-details";
import { CategoriaProvider } from '../../providers/categoria';
import { CarrinhoProvider } from '../../providers/carrinho';


@Component({
    selector: 'page-livro-list',
    templateUrl: 'livro-list.html'
})
export class LivroListPage {
    selectedItem: any;
   // icons: string[];
    items : Array<iLivro>;
    itemsFilter : Array<iLivro>;
    pesquisa: string;
    visibilidade: boolean;
    categorias: any;
    livro: any;
    alert: any
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public livroProvider:LivroProvider,
         public carrinhoProvider:CarrinhoProvider, public categoriaProvider:CategoriaProvider, public alertCtrl: AlertController,) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        
        this.items = livroProvider.getLivros();
        
        // Aqui removemos todas as linhas de inserção de itens, já que agora
        // está dentro do método livroProvider.getLivros()

        this.itemsFilter = this.items;
        this.visibilidade = false;
    }
    

    ionViewWillEnter() {
        this.items = this.livroProvider.getLivros();
        this.itemsFilter = this.items;

        this.categoriaProvider.getCategorias().then(data => {
            this.categorias = data;
            console.log("categorias ***");
            console.log(this.categorias);
            });
    }
      
    itemTapped(event, item) {
       
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(LivroDetailsPage, {
            item : item
        });
    }
      
    novoItem(event, item) {
        this.navCtrl.push(LivroAddPage, { });
    }
      

    abrirPesquisa(event) {
        this.visibilidade = true;
    }

    pesquisar(event) {
        this.itemsFilter = this.items.filter((i) => {
            if (i.titulo.indexOf(this.pesquisa) >= 0) {
              return true;
            }
            return false;
          })
    }

    cancelarPesquisa() {
        this.visibilidade = false;
        this.pesquisa = "";
        this.pesquisar(null);
    }

    adicionaCarrinho(items){
        this.carrinhoProvider.adicionarLivro(items);
        const alert = this.alertCtrl.create({
            title: 'Biblioteca Unip',
            message: 'Livro Adicionado ao carrinho!',
            buttons: ['Ok']
          });
         alert.present();
         console.log(items.titulo);
         console.log(items.ano);
    }
}