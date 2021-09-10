import React from 'react';

export default function WhyGrid() {
    return (
        <section className="why-grid">

            <div className="why-grid__card">
                <img src="../img/paulflashback.png" alt="Paul flashback" className="why-grid__card__img" />
                <div className="why-grid__card__content">
                    <h2 className="heading-secondary mb-sm">El mayor reto de la humanidad: centrar un componente</h2>
                    <p className="paragraph">
                        En mi corta vida como desarrollador de software, me he enfrentado varías veces con el mismo problema:
                        centrar elementos.
                        Hay miles de soluciones para este problema: 
                        <h3 className="heading-3 heading-3--black">Margin auto</h3>
                        <h3 className="heading-3 heading-3--black">Absolute position</h3>
                        <h3 className="heading-3 heading-3--black">Paddings</h3>
                        <h3 className="heading-3 heading-3--black">Etc.</h3>
                        <b></b>
                    </p>
                </div>
            </div>
        </section>
    )
}
