import React from "react";
import './Home.css';

import equipe_cafeshion from '../../assets/images/equipe_cafeshion.jpg'

function Home() {
    return (
        <main className="main-home">
            <h1>Aquecendo o corpo e a alma.</h1>
            <section className="section-group">
                <section className="sobre-nos">
                    <h2>Quem somos nós</h2>
                    <p>Fundada no ano de 2022 seu objetivo inicial – um desafio que se tornou uma paixão. 
                        Com o intuito de permitir que você tome aquele café delicioso 
                        e faça compras ao mesmo tempo, em um ambiente acolhedor, 
                        inspirado na melhor época da história nos anos 60, 
                        quando os carros eram legais, a música era boa e todo mundo dançava junto. 
                        O Caféshion traz para você uma experiência única, 
                        de conhecer um pouco mais sobre essa época tão importante.</p>
                </section>
                <section className="nossa-equipe">
                    <h2>Nossa Equipe</h2>
                    <img src={equipe_cafeshion} />
                </section>
            </section>
        </main>
    );
}

export default Home;