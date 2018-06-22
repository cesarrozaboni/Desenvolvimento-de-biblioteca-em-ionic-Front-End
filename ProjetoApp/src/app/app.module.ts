import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {  BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AnimatesDirective, AnimationService} from "css-animator";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LivroListPage } from '../pages/livro-list/livro-list';
import { LivroAddPage } from '../pages/livro-add/livro-add';
import { LivroDetailsPage } from '../pages/livro-details/livro-details';
import { AnimacoesPage } from '../pages/animacoes/animacoes';
import { SocialPage } from '../pages/social/social';
import { AutorAddPage } from '../pages/autor-add/autor-add'

import { AutorProvider } from '../providers/autor';
import { LivroProvider } from '../providers/livro';
import { CarrinhoProvider } from '../providers/carrinho'
import { SobrePage } from '../pages/sobre/sobre'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaProvider } from '../providers/categoria';
import { HttpModule } from "@angular/http";
import { LoginProvider } from '../providers/login';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { LivroAutorProvider } from '../providers/livro-autor';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { SocialCardComponent } from '../components/social-card/social-card';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    AutorAddPage,
    AnimatesDirective,
    AnimacoesPage,
    SigninPage,
    SignupPage,
    SocialPage,
    SocialCardComponent,
    CarrinhoPage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivroListPage,
    LivroAddPage,
    LivroDetailsPage,
    AutorAddPage,
    AnimacoesPage, 
    SigninPage,
    SignupPage,
    SocialPage,
    CarrinhoPage,
    SobrePage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider,
    AutorProvider,
    AnimationService,
    CategoriaProvider,
    LoginProvider,
    LivroAutorProvider,
    CarrinhoProvider
    ]
})
export class AppModule {}
