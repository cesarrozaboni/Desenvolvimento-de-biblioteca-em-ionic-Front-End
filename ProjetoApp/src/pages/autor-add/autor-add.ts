import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, MenuToggle } from 'ionic-angular';
//import { LivroProvider } from "../../providers/livro";
//import { iLivro } from "../../interfaces/iLivro";
import { AutorProvider } from "../../providers/autor";
import { iAutor } from '../../interfaces/iAutor';
//import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-Autor-add',
  templateUrl: 'Autor-add.html',
})
export class AutorAddPage {

  autor: iAutor;
 // modoEdicao: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public autorProvider: AutorProvider) {

    this.autor = navParams.get("item");


   //  if (this.autor == null) {
     //this.modoEdicao = false;
    this.autor = autorProvider.getInstancia();
    //}
    //else
    // this.modoEdicao = true;


  }
  
  salvar(evento) {
  
    if(this.autor.nome == "" || this.autor.idade == null ){
      const alert = this.alertCtrl.create({
        title: 'Biblioteca Unip',
        message: 'Não foi possivel adicionar o autor, verifique se os campos foram preenchidos corretamente!',
        buttons: ['Ok']
      });
    }else{
      this.autorProvider.adicionarAutor(this.autor);
          const alert = this.alertCtrl.create({
        title: 'Biblioteca Unip',
        message: 'Autor cadastrado com sucesso!',
        buttons: ['Ok']
      });
      alert.present();
    }
    }


  limpar() {
    this.autor.nome = "";
    this.autor.idade = null;

  }

 

}

