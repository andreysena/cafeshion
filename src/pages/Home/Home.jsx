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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aenean bibendum quam et magna finibus aliquam. 
                        Maecenas lobortis, libero ut aliquet congue, nunc lorem lacinia mauris, venenatis tristique ligula felis ut augue. 
                        Donec molestie pretium nulla, a faucibus neque placerat sed. 
                        Duis tempor fringilla magna vitae faucibus. 
                        Proin a turpis non lorem consequat tempus at id tellus. 
                        Nulla bibendum vitae justo vitae dapibus. Maecenas placerat consequat cursus. 
                        Duis sed orci malesuada, ornare lectus in, blandit urna. Duis ac molestie magna. 
                        Curabitur molestie augue eget placerat congue. Donec nibh metus, sagittis at pellentesque vitae, ultricies vel nibh. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris non sem nunc. 
                        Donec nec facilisis diam. Sed dictum tortor et est tempus maximus.</p>
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