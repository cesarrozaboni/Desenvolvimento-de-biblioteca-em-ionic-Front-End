import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController, NavController, NavParams } from "ionic-angular";

import { LoginProvider } from "../../providers/login";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Autenticando...'
    });

    loading.present();
    this.loginProvider.signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        this.navCtrl.push(HomePage, {});
      })
      .catch(error => {
        loading.dismiss();

        console.log(error);

        const alert = this.alertCtrl.create({
          title: 'Login falhou!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

  novoUsuario() {
    this.navCtrl.push(SignupPage, {});
  }
}
