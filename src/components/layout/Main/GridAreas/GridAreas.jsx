import React from 'react'
import Button from '../../../Button/Button'
import ButtonBox from '../../../Button/ButtonBox'
import Card from '../../../Card/Card'
import CardContent from '../../../Card/CardContent'
import TravelsCard from '../../../Card/TravelsCard'
import Heading from '../../../Typography/Heading'
import Paragraph from '../../../Typography/Paragraph'

export default function GridAreas() {
    return (
        <div className="grid-areas mt-lg">
            <Heading className="text-align-center">De las funciones mas utiles de CSS Grid:</Heading>
            <Heading className="text-align-center">Grid areas</Heading>
            <Card type="double" className="mb-md mt-md">
                <CardContent className="grid-areas__areas-layout">
                    <span className="grid-areas__areas-layout--desktop">
                        <Heading type="3" color="black">photo photo photo title title</Heading>
                        <Heading type="3" color="black">photo photo photo stats stats</Heading>
                        <Heading type="3" color="black">photo photo photo text text</Heading>
                        <Heading type="3" color="black">photo photo photo info info</Heading>
                    </span>
                    <span className="grid-areas__areas-layout--mobile">
                        <Heading type="3" color="black">photo photo</Heading>
                        <Heading type="3" color="black">title title</Heading>
                        <Heading type="3" color="black">stats stats</Heading>
                        <Heading type="3" color="black">text text</Heading>
                        <Heading type="3" color="black">info info</Heading>
                    </span>
                </CardContent>
                <CardContent>
                    <Paragraph>
                        Con CSS Grid tenemos la opción de <b>asignar un nombre</b> a cada área de nuestra interfaz y ordenarla en base a su nombre,
                        esto nos ayuda mucho con el tema de la <b>responsividad</b>, ya que podemos hacer que en cierto puqnto nuestros componentes
                        se <b>reordenen</b> para que se tenga una mejor visualización de los elementos.
                    </Paragraph>
                </CardContent>
            </Card>
            <div className="grid-areas__card-container mb-md">
                <TravelsCard />
            </div>
            <ButtonBox>
                <Button onClick={() => window.open('https://codepen.io/paulmirve/pen/JjJWrpK', '_blank').focus()}>Ver código</Button>
            </ButtonBox>
        </div>
    )
}
