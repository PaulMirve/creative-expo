import React, { useState } from 'react';
import Button from '../../Button/Button';

export default function GridCard({ className = '', title, alignment }) {
    const [aligned, setAligned] = useState(false);
    const [direction, setDirection] = useState('');
    const align = (value) => {
        if (value !== 'stretch') {
            setDirection(value);
            setAligned(true);
        } else {
            setAligned(false);
        }

    }
    return (
        <div className={`grid-card ${className}`}>
            <h5 className="grid-card__title">{title}</h5>
            <div className="grid-card__container">
                <div className={`grid-card__grid ${aligned ? `grid-card__grid--${alignment}-${direction}` : ''}`}>
                    <div className="grid-card__grid-item grid-card__grid-item-1">Item 1</div>
                    <div className="grid-card__grid-item grid-card__grid-item-2">Item 2</div>
                    <div className="grid-card__grid-item grid-card__grid-item-3">Item 3</div>
                    <div className="grid-card__grid-item grid-card__grid-item-4">Item 4</div>
                </div>
            </div>
            <div className="grid-card__buttons">
                <Button className="grid-card__button mt-sm" onClick={() => align('center')} type="secondary-reverse">Center</Button>
                <Button className="grid-card__button mt-sm" onClick={() => align('end')} type="secondary-reverse">End</Button>
                <Button className="grid-card__button mt-sm" onClick={() => align('start')} type="secondary-reverse">Start</Button>
                <Button className="grid-card__button mt-sm" onClick={() => align('stretch')} type="secondary-reverse">Stretch</Button>
            </div>

        </div>
    )
}
