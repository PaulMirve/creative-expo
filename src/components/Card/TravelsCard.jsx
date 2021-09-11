import React from 'react';
export default function TravelsCard({ photo, title }) {
    return (
        <div className="travel-card">
            <figure className="travel-card__photo-frame">
                <div className="travel-card__tag">Agenda ahora!</div>
                <button className="travel-card__button">
                    <img src="../img/svg/icon-heart.svg" alt="Icon heart" />
                </button>
                <img src="../img/travel.jpg" alt="Photo" className="travel-card__photo" />
            </figure>
            <h3 className="travel-card__title">Viaja ahora</h3>
            <div className="travel-card__stats">
                <p>34 <img src="../img/svg/icon-heart-grey.svg" alt="Icon heart grey" /></p>
                <p>54 <img src="../img/svg/icon-comment-grey.svg" alt="Icon comment" /></p>
            </div>
            <p className="travel-card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam placeat iste vitae blanditiis quidem, odio error doloremque incidunt nostrum repudiandae at repellat laborum, quae ratione voluptatibus assumenda animi impedit explicabo. </p>
            <div className="travel-card__info">
                <div className="travel-card__info-days">7 días</div>
                <div className="travel-card__info-price">$300</div>
            </div>
        </div>
    )
}
