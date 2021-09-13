import React from 'react'
import Heading from '../../../Typography/Heading'

export default function DrakeMeme() {
    return (
        <div className="drake-meme">
            <Heading>En resumen</Heading>
            <div className="drake-meme__container">
                <img src="../img/paul-asqueado.png" alt="Paul asqueado" className="drake-meme__img drake-meme__img--1" />
                <div className="drake-meme__text drake-meme__text--1">
                    <span>
                        <Heading type="3" color="black" >Margin 0 auto</Heading>
                        <Heading type="3" color="black" >Floats</Heading>
                        <Heading type="3" color="black" >Absoulte center</Heading>
                        <Heading type="3" color="black" >Css puro</Heading>
                    </span>

                </div>
                <img src="../img/paul-ok.png" alt="Paul ok" className="drake-meme__img drake-meme__img--2" />
                <div className="drake-meme__text drake-meme__text--2">
                    <span>
                        <Heading type="3" color="black" >Display grid</Heading>
                        <Heading type="3" color="black" >Grid areas</Heading>
                        <Heading type="3" color="black" >Scss</Heading>
                    </span>
                </div>
            </div>
        </div>
    )
}
