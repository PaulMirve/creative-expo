import React from 'react'

export default function Paragraph({ className = '', children }) {
    return (
        <p className={`paragraph ${className}`}>
            {children}
        </p>
    )
}
