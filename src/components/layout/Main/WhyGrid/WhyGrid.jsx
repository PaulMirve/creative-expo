import React from 'react';
import Grid1 from '../../Grids/Grid1';
import Button from '../../../Button/Button';
import Card from '../../../Card/Card';
import CardImage from '../../../Card/CardImage';
import CardContent from '../../../Card/CardContent';

export default function WhyGrid() {
    return (
        <section className="why-grid">
            <Card className="mb-md" type="double">
                <CardImage src="../img/paulflashback.png" alt="Paul flashback" />
                <CardContent>
                    <h2 className="heading-secondary mb-sm">El mayor reto de la humanidad: centrar un componente</h2>
                    <p className="paragraph mb-sm">
                        En mi corta vida como desarrollador de software, me he enfrentado varías veces con el mismo problema:
                        <b>centrar elementos</b>.
                        Hay miles de soluciones para este problema: </p>
                    <span className="slide-headings--5">
                        <h3 className="heading-3 heading-3--black slide-headings slide-right">Margin auto</h3>
                        <h3 className="heading-3 heading-3--black slide-headings slide-right">Absolute position</h3>
                        <h3 className="heading-3 heading-3--black slide-headings slide-right">Paddings</h3>
                        <h3 className="heading-3 heading-3--black slide-headings slide-right mb-sm">Entre otras muchas opciones...</h3>
                    </span>
                    <p className="paragraph">
                        Esta muy confundido con tantas opciones y posibilidades, hasta que descubrí...
                    </p>
                </CardContent>
            </Card>
            <h1 className="heading-huge fade-in fade-in--slow text-align-center">CSS GRID!!!</h1>
            <div className="why-grid__card--simple mb-md">
                <div className="why-grid__card__content">
                    <p className="paragraph text-align-center">
                        Si flexbox ya nos facilitaba la vida, CSS Grid vino a darnos una nueva serie de herramientas para organizar nuestras interfaces:
                    </p>

                </div>
            </div>
            <Grid1 />
            <div className="why-grid__button-box">
                <Button
                    onClick={() => window.open('https://codepen.io/paulmirve/pen/abwJLqd', '_blank').focus()}
                    className="mt-md"
                    size="md">Ver código</Button>
            </div>
        </section >
    )
}
