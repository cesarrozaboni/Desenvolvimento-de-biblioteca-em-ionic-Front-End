import { Injectable } from '@angular/core';
import { iLivro } from '../interfaces/ILivro';

@Injectable()
export class LivroProvider {
    private livros: iLivro[] = [];

    constructor() {
        if (this.livros.length == 0)
            this.popularLivros();
    }

    popularLivros() {
        this.livros.push({ id: 1, titulo: "Anatomia do design", ano: 2017, img: "assets/capas/livro1.jpg" });
        this.livros.push({ id: 2, titulo: "Como se faz", ano: 2016, img: "assets/capas/livro2.jpg" });
        this.livros.push({ id: 3, titulo: "A linguagem imprevisivel da TIPOGRAFIA", ano: 2015, img: "assets/capas/livro3.jpg" });
        this.livros.push({ id: 4, titulo: "DESENHO para designers", ano: 2016, img: "assets/capas/livro4.jpg" });
        this.livros.push({ id: 5, titulo: "Letras que bailam", ano: 2016, img: "assets/capas/livro5.jpg" });
        this.livros.push({ id: 6, titulo: "Sistemas de informação", ano: 2013, img: "assets/capas/livro6.jpg" });
        this.livros.push({ id: 7, titulo: "Construção da marca", ano: 2010, img: "assets/capas/livro7.jpg" });
        this.livros.push({ id: 8, titulo: "ADG", ano: 2017, img: "assets/capas/livro8.jpg" });
        this.livros.push({ id: 9, titulo: "ADG", ano: 2012, img: "assets/capas/livro9.jpg" });
        this.livros.push({ id: 10, titulo: "I NEMICI DE FRANCISCO", ano: 2015, img: "assets/capas/livro10.jpg" });
    }
    getInstancia(): iLivro {
        return {
            id: 0,
            titulo: "",
            ano: null,
            img: ""
        };
    }
    getLivros(): iLivro[] {
        return this.livros;
    }

    adicionarLivro(livro: iLivro) {
        if (livro.id == 0)
            livro.id = this.getNextID();
            this.livros.push(livro);
    }

    removerLivro(livro: iLivro) {
        let position = this.livros.findIndex((l: iLivro) => {
            return l.id == livro.id;
        });
        this.livros.splice(position, 1);
    }

    private getNextID(): number {
        let nextId = 0;
        if (this.livros.length > 0) {
            nextId = Math.max.apply(
                Math, this.livros.map(function (o) { return o.id; })
            );
        }
        return ++nextId;
    }

    alterarLivro(livro: iLivro) {
        console.log(this.livros);
        let position = this.livros.findIndex((l: iLivro) => {
            return l.id == livro.id;
        })
        this.livros[position].titulo = livro.titulo;
        this.livros[position].ano = livro.ano;
        this.livros[position].img = livro.img;
    }
}