import { Injectable } from '@angular/core';
import { iLivro } from '../interfaces/ILivro';

@Injectable()
export class CarrinhoProvider {
    private itensCarrinho: iLivro[] = [];

    constructor() {
        if (this.itensCarrinho.length == 0)
            this.popularLivros();
            
    }

    popularLivros() {
        this.itensCarrinho.push({ id: 1, titulo: "Anatomia do design", ano: 2017, img: "assets/capas/livro1.jpg" });
        
   }

   getInstancia(): iLivro {
    return {
        id: 0,
        titulo: "",
        ano: null,
        img: ""
    };

}
   adicionarLivro(item: iLivro) {
    if (item.id == 0)
    item.id = this.getNextID();
    this.itensCarrinho.push(item);
}
    
    
    getLivros(): iLivro[] {
        return this.itensCarrinho;
    }

     removerLivro(item) {
       let position = this.itensCarrinho.findIndex((l: iLivro) => {
            return l.id == item.id;
        });  
             
        this.itensCarrinho.splice(position, 1);
    }

    private getNextID(): number {
        let nextId = 0;
        if (this.itensCarrinho.length > 0) {
            nextId = Math.max.apply(
                Math, this.itensCarrinho.map(function (o) { return o.id; })
           );
        }
        return ++nextId;
    }

   
   
}