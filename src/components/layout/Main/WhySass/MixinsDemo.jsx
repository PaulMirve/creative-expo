import React from 'react';
import Button from '../../../Button/Button';
import ButtonBox from '../../../Button/ButtonBox';

export default function MixinsDemo() {
    return (
        <div className="why-sass__demo-mixins">
            <div className="why-sass__demo-mixins__container">
                <button class="why-sass__demo-mixins__btn why-sass__demo-mixins__btn--1">Button 1</button>
                <button class="why-sass__demo-mixins__btn why-sass__demo-mixins__btn--2">Button 2</button>
                <button class="why-sass__demo-mixins__btn why-sass__demo-mixins__btn--3">Button 3</button>
            </div>
            <ButtonBox>
                <Button onClick={() => window.open('https://codepen.io/paulmirve/pen/RwggWVQ', '_blank').focus()}>Ver código</Button>
            </ButtonBox>
        </div>
    )
}
