import React from "react";
import './Brecho.css';

import Card from "../../components/Card/Card";

const Brecho = () => {

    const brecho = [
        {
            "nome": "Vestido Preto com Renda e Alça Fina",
            "preco": "3,00"
        },
        {
            "nome": "Blusinha Amarela",
            "preco": "3,00"
        },
        {
            "nome": "Blazer Vermelho",
            "preco": "4,00"
        },
        {
            "nome": "Blazer Social Listrado tamanho P",
            "preco": "6"
        },
        {
            "nome": "Blusa Manga Longa (Listra em V)",
            "preco": "3,00"
        },
        {
            "nome": "Short Curto Jeans",
            "preco": "6,00"
        },
        {
            "nome": "Body Preto com Flores Vermelhas",
            "preco": "3,00"
        },
        {
            "nome": "Calça Jeans Slim Fit",
            "preco": "6,00"
        },
        {
            "nome": "Mini Saia Branca com Strass",
            "preco": "6,00"
        },
        {
            "nome": "Vestido Branco com Rendado",
            "preco": "3,00"
        },
        {
            "nome": "Robe Verde Marinho para Pijamas 42",
            "preco": "5,00"
        },
        {
            "nome": "Vestido Branco com Estampa Colorida",
            "preco": "3,00"
        },
        {
            "nome": "Chinelo Best Friends",
            "preco": "5,00"
        },
    ]

    return (
        <main className="main-brecho">
            <h1>Confiras nossas peças</h1>
            <section className="product-list">
                {
                    brecho.map((item, i) => {
                        return (
                            <Card srcImg={`brecho/${i+1}.png`} name={item.nome} price={item.preco} key={i}/>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Brecho;