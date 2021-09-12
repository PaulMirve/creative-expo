import React from 'react';
import Button from '../../../Button/Button';
import ButtonBox from '../../../Button/ButtonBox';

export default function VariablesDemo() {
    return (
        <div className="why-sass__demo-variables">
            <div className="why-sass__demo-variables__container">
                <h3 className="why-sass__demo-variables-heading why-sass__demo-variables-heading--1">Heading 1</h3>
                <h3 className="why-sass__demo-variables-heading why-sass__demo-variables-heading--2">Heading 2</h3>
                <h3 className="why-sass__demo-variables-heading why-sass__demo-variables-heading--3">Heading 3</h3>
                <h3 className="why-sass__demo-variables-heading why-sass__demo-variables-heading--4">Heading 4</h3>
                <h3 className="why-sass__demo-variables-heading why-sass__demo-variables-heading--5">Heading 5</h3>
                <h3 className="why-sass__demo-variables-heading why-sass__demo-variables-heading--6">Heading 6</h3>
            </div>
            <ButtonBox>
                <Button onClick={() => window.open('https://codepen.io/paulmirve/pen/RwgVOgm', '_blank').focus()}>Ver código</Button>
            </ButtonBox>
        </div>
    )
}
