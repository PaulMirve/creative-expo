import React from 'react';
import Button from '../../../Button/Button';
import ButtonBox from '../../../Button/ButtonBox';

export default function FunctionsDemo() {
    return (
        <div className="why-sass__demo-functions">
            <div className="why-sass__demo-functions__container">
                <h3 className="why-sass__demo-functions-item why-sass__demo-functions-item--1">Fade 1</h3>
                <h3 className="why-sass__demo-functions-item why-sass__demo-functions-item--2">Fade 2</h3>
                <h3 className="why-sass__demo-functions-item why-sass__demo-functions-item--3">Fade 3</h3>
            </div>
            <ButtonBox>
                <Button onClick={() => window.open('https://codepen.io/paulmirve/pen/JjJNVqz', '_blank').focus()}>Ver código</Button>
            </ButtonBox>
        </div>
    )
}
