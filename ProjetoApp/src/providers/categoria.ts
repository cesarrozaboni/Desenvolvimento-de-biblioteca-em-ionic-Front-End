import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoriaProvider {

  apiUrl = 'http://localhost:3014/api/v1';
  //private categorias = null;

  constructor(public http: Http) {
    //console.log('Hello CategoriaProvider Provider');
  }

  getCategorias(): any {//ANY retorna um array sem erro

    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/categorias').map(res => res.json())
        .subscribe(dados => {
          resolve(dados);
        });
    }).catch(function (e) {
      console.log("Passei no erro");
    });
  }
}
