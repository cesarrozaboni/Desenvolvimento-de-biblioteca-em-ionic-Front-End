import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { LivroListPage } from '../pages/livro-list/livro-list';
import { LivroAddPage } from '../pages/livro-add/livro-add';
import { AutorAddPage } from '../pages/autor-add/autor-add'
import { LivroDetailsPage } from '../pages/livro-details/livro-details';
import { AnimacoesPage } from '../pages/animacoes/animacoes';
import { SocialPage} from '../pages/social/social';
import { LoginProvider } from '../providers/login';
import { SigninPage } from '../pages/signin/signin';
import { CarrinhoPage } from '../pages/carrinho/carrinho'
import { SobrePage } from '../pages/sobre/sobre'
 

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  signinPage: any = SigninPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen, public loginProvider: LoginProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Livros', component: LivroListPage },
      { title: 'Adicionar livros', component: LivroAddPage },
      { title: 'Detalhes', component: LivroDetailsPage },
      { title: 'Cadastrar autores', component: AutorAddPage},
     //{ title: 'Animacoes', component: AnimacoesPage },
      { title: 'Social' ,component:SocialPage },
      { title: 'Carrinho', component:CarrinhoPage},
      { title: 'Sobre', component:SobrePage},
    ];

  }

  initializeApp() {
   
  }

  openPage(page) {
    if (page.title == "Sair") {
      this.loginProvider.logout();
      return;
    }
    this.nav.setRoot(page.component);
  }

  getMenuLogado() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Livros', component: LivroListPage },
      { title: 'Cadastrar autores', component: AutorAddPage},
     
      { title: 'Social', component: SocialPage},
      { title: 'Carrinho', component:CarrinhoPage},
     // { title: 'Animações', component:AnimacoesPage},
      { title: 'Sobre', component:SobrePage},
      { title: 'Sair', component: null },
    ];

  }
  getMenuAnonimo() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Entrar', component: SigninPage },
      { title: 'Livros', component: LivroListPage },    
      { title: 'Social', component: SocialPage},
      { title: 'Sobre', component:SobrePage},
    ];
  }
}
