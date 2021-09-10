import React from 'react'

export default function CardImage({ src, alt, className }) {
    return (
        <img src={src} alt={alt} className={`card__img ${className}`} />
    )
}
