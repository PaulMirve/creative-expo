import React from 'react'
import Heading from '../../Typography/Heading'

export default function Header() {
    return (
        <header className="header">
            <Heading type="huge" className="fade-in">El poder de css grid y sass</Heading>
            <Heading type="3" className="fade-in fade-in--slow">Por Paul Miranda</Heading>
        </header>
    )
}
