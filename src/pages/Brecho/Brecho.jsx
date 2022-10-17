import React from "react";
import './Brecho.css';

import Card from "../../components/Card/Card";

const Brecho = () => {
    return (
        <main className="main-brecho">
            <h1>Confiras nossas peças</h1>
            <section className="product-list">
                {
                    Array(10).fill().map(i => {
                        return (
                            <Card tipo='b' key={i}/>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Brecho;