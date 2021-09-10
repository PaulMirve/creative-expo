import React from 'react'

export default function InfoCard({ children, className, title }) {
    return (
        <div className={`info-card ${className}`}>
            <h5 className="info-card__title">{title}</h5>
            <p className="info-card__text paragraph">
                {children}
            </p>
        </div>
    )
}
