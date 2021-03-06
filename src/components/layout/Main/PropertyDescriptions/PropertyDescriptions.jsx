import React from 'react'
import Button from '../../../Button/Button';
import ButtonBox from '../../../Button/ButtonBox';
import Card from '../../../Card/Card';
import CardContent from '../../../Card/CardContent';
import InfoCard from '../../../InfoCard/InfoCard';
import GridCard from '../../Grids/GridCard';

export default function PropertyDescriptions() {
    return (
        <section className="property-description">
            <Card className="mt-md" type="double">
                <CardContent>
                    <p className="paragraph slide slide--md slide-left">
                        Para convertir un <b>div</b> en un grid, lo único que tenemos que hacer es establecer su display como grid:
                    </p>
                    <p className="paragraph slide slide--md slide-left"><b>display:grid</b></p>
                    <p className="paragraph slide slide--md slide-left">A partir de aquí podemos usar las siguientes propiedades:</p>
                    <InfoCard title="justify-items" className="slide slide--md slide-left">
                        Esta propiedad nos sirve para alinear los elementos horizontalmente.
                    </InfoCard>
                    <InfoCard title="align-items" className="slide slide--md slide-left">
                        Esta propiedad nos sirve para alinear los elementos verticalmente.
                    </InfoCard>
                    <InfoCard title="justify-self" className="slide slide--md slide-left">
                        Esta propiedad nos sirve para sacar un elemento del grid de la justify del padre.
                    </InfoCard>
                    <InfoCard title="align-self" className="slide slide--md slide-left">
                        Esta propiedad nos sirve para sacar un elemento del grid del aliniamiento del padre.
                    </InfoCard>
                    <InfoCard title="place-items" className="slide slide--md slide-left">
                        Esta propiedad nos sirve para alinear los elementos en el centro del contenedor con solo una propiedad.
                    </InfoCard>
                </CardContent>
                <CardContent className="property-description__card-content slide-headings--5">
                    <h3 className="heading-3 heading-3--black slide-headings slide-right">justify-items</h3>
                    <h3 className="heading-3 heading-3--black slide-headings slide-right">align-content</h3>
                    <h3 className="heading-3 heading-3--black slide-headings slide-right">justify-self</h3>
                    <h3 className="heading-3 heading-3--black slide-headings slide-right">align-self</h3>
                    <h3 className="heading-3 heading-3--black slide-headings slide-right">place-items</h3>
                </CardContent>
            </Card>
            <div className="property-description__grid">
                <GridCard title="Justify items" alignment="justify-items" />
                <GridCard title="Align items" alignment="align-items" />
            </div>
            <ButtonBox>
                <Button
                    onClick={() => window.open('https://codepen.io/paulmirve/pen/BaZRdvQ', '_blank').focus()}
                    className="mt-md"
                    size="md">Ver código</Button>
            </ButtonBox>
        </section>
    )
}
