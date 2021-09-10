import React from 'react'

export default function CardContent({ className, children }) {
    return (
        <div className={`card__content ${className}`}>
            {children}
        </div>
    )
}
