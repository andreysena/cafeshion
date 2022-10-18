import React from "react";
import './Cafe.css';

import Card from "../../components/Card/Card";

function Cafe() {

    const cafe = [
        {
            "nome": "Café Puro",
            "preco": "1,50"
        },
        {
            "nome": "Café Com Leite",
            "preco": "2,00"
        },
        {
            "nome": "Suco de Laranja",
            "preco": "1,50"
        },
        {
            "nome": "Misto Quente",
            "preco": "4,00"
        },
        {
            "nome": "Bolo de Prestígio",
            "preco": "5,00"
        },
        {
            "nome": "Bolo de Cenoura com Chocolate",
            "preco": "5,00"
        }
    ]

    return (
        <main className="main-cafe">
            <h1>Aproveite as delicias do nosso café</h1>
            <section className="product-list">
                {
                    cafe.map((item, i) => {
                        return (
                            <Card srcImg={`cafe/${i+1}.jpeg`} name={item.nome} price={item.preco} key={i}/>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Cafe;