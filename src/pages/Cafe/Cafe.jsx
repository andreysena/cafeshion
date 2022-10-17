import React from "react";
import './Cafe.css';

import Card from "../../components/Card/Card";

function Cafe() {
    return (
        <main className="main-cafe">
            <h1>Aproveite as delicias do nosso café</h1>
            <section className="product-list">
                {
                    Array(10).fill().map(i => {
                        return (
                            <Card tipo='c' key={i}/>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Cafe;