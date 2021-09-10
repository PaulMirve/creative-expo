import React from 'react';

export default function WhyGrid() {
    return (
        <section className="why-grid">

            <div className="why-grid__card">
                <img src="../img/paulflashback.png" alt="Paul flashback" className="why-grid__card__img" />
                <div className="why-grid__card__content">
                    <h2 className="heading-secondary mb-sm">El mayor reto de la humanidad: centrar un componente</h2>
                    <p className="paragraph mb-sm">
                        En mi corta vida como desarrollador de software, me he enfrentado varías veces con el mismo problema:
                        <b>centrar elementos</b>.
                        Hay miles de soluciones para este problema: </p>
                    <h3 className="heading-3 heading-3--black">Margin auto</h3>
                    <h3 className="heading-3 heading-3--black">Absolute position</h3>
                    <h3 className="heading-3 heading-3--black">Paddings</h3>
                    <h3 className="heading-3 heading-3--black mb-sm">Entre otras muchas opciones...</h3>
                    <p className="paragraph">
                        Esta muy confundido con tantas opciones y posibilidades, hasta que descubrí...
                    </p>
                </div>
            </div>
        </section>
    )
}
