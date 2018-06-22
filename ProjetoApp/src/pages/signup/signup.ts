import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController, NavController, NavParams } from "ionic-angular";
import { LoginProvider } from "../../providers/login";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loginProvider: LoginProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
  }

  onSignup(form: NgForm) {
    console.log(form.value);

    const loading = this.loadingCtrl.create({
      content: 'Criando Usuário...'
    });

    loading.present();

    this.loginProvider.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        this.navCtrl.push(HomePage, {});
      })
      .catch(error => {
        loading.dismiss();

        console.log(error);

        const alert = this.alertCtrl.create({
          title: 'Autenticação falhou!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }
}
