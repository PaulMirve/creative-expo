import React from 'react'
import Heading from '../../Typography/Heading'

export default function Header() {
    return (
        <header className="header">
            <Heading type="huge" className="slide slide--md slide-left--long">El poder de</Heading>
            <Heading type="huge" className="slide slide--md slide-right--long">css grid y scss</Heading>
            <Heading type="3" className="fade-in fade-in--slow">Por Paul Miranda</Heading>
        </header>
    )
}
