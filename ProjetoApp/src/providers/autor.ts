import { Injectable } from '@angular/core';
import { iAutor } from '../interfaces/iAutor';

@Injectable()
export class AutorProvider {
    private autores: iAutor[] = [];

    constructor() {
        if (this.autores.length == 0)
            this.popularAutores();
    }

    popularAutores() {
        this.autores.push({id : 1, nome : "Mario Quintana", idade : 87, img : "assets/autores/mario.jpg" });
        this.autores.push({id : 2, nome : "Luís de Camões", idade : 56, img : "assets/autores/Camoes3.jpg"  });
        this.autores.push({id : 3, nome : "Machado de Assis", idade : 69, img : "assets/autores/Machado_de_assis.jpg" });
        this.autores.push({id : 4, nome : "Albert Einstein", idade : 76, img : "assets/autores/einstein.jpg" });
        this.autores.push({id : 5, nome : "Gloria Hurtado", idade : 58, img : "assets/autores/gloria.jpg" });
        this.autores.push({id : 6, nome : "Amyr Klink", idade : 62, img : "assets/autores/amyr.jpg" });
        this.autores.push({id : 7, nome : "Nemo Nox", idade : 41, img : "assets/autores/nemo.jpg" });
        this.autores.push({id : 8, nome : "Leon Tolstói", idade : 82, img : "assets/autores/leon-tolstoi-2-l.jpg" });
        this.autores.push({id : 9, nome : "Khalil Gibran", idade : 48, img : "assets/autores/khalil-gibran2.jpg" });
        this.autores.push({id : 10, nome : "Elbert Hubbard", idade : 58, img : "assets/autores/24798-004-78D7A811.jpg" });
    }

    getInstancia(): iAutor {
        return {
            id: 0,
            nome: "",
            idade: null,
            img: "",
        };
    }

    getAutores(): iAutor[] {
        return this.autores;
    }

    adicionarAutor(autor: iAutor) {
        this.autores.push(autor);
    }

    removerAutor(autor: iAutor) {
        let position = this.autores.findIndex((l: iAutor) => {
            return l.id == autor.id;
        })

        this.autores.slice(position, 1);
    }

    alterarAutor(autor: iAutor) {
        let position = this.autores.findIndex((l: iAutor) => {
            return l.id == autor.id;
        })
        this.autores[position].nome = autor.nome;
        this.autores[position].idade = autor.idade;
        this.autores[position].img = autor.img;
    }
}
