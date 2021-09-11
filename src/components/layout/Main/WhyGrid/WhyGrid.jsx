import React from 'react';
import Grid1 from '../../Grids/Grid1';
import Button from '../../../Button/Button';
import ButtonBox from '../../../Button/ButtonBox';
import Card from '../../../Card/Card';
import CardImage from '../../../Card/CardImage';
import CardContent from '../../../Card/CardContent';
import Heading from '../../../Typography/Heading';

export default function WhyGrid() {
    return (
        <section className="why-grid">
            <Card className="mb-md" type="double">
                <CardImage src="../img/paulflashback.png" alt="Paul flashback" />
                <CardContent>
                    <Heading type="secondary" className="mb-sm">El mayor reto de la humanidad: centrar un componente</Heading>
                    <p className="paragraph mb-sm">
                        En mi corta vida como desarrollador de software, me he enfrentado varías veces con el mismo problema:
                        <b>centrar elementos</b>.
                        Hay miles de soluciones para este problema: </p>
                    <span className="slide-headings--5">
                        <Heading type='3' color="black" className="slide-headings slide-right">Margin auto</Heading>
                        <Heading type='3' color="black" className="slide-headings slide-right">Absolute position</Heading>
                        <Heading type='3' color="black" className="slide-headings slide-right">Paddings</Heading>
                        <Heading type='3' color="black" className="slide-headings slide-right mb-sm">Entre otras muchas opciones...</Heading>
                    </span>
                    <p className="paragraph">
                        Esta muy confundido con tantas opciones y posibilidades, hasta que descubrí...
                    </p>
                </CardContent>
            </Card>
            <Heading type="huge" className="fade-in fade-in--slow text-align-center">CSS GRID!!!</Heading>
            <div className="why-grid__card--simple mb-md">
                <div className="why-grid__card__content">
                    <p className="paragraph text-align-center">
                        Si flexbox ya nos facilitaba la vida, CSS Grid vino a darnos una nueva serie de herramientas para organizar nuestras interfaces:
                    </p>

                </div>
            </div>
            <Grid1 />
            <ButtonBox>
                <Button
                    onClick={() => window.open('https://codepen.io/paulmirve/pen/abwJLqd', '_blank').focus()}
                    className="mt-md"
                    size="md">Ver código</Button>
            </ButtonBox>
        </section >
    )
}
