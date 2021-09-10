import React from 'react'

export default function Card({ className, type, children }) {
    const getType = () => {
        switch (type) {
            case 'double':
                return 'card--double';
            default:
                return 'card--simpe';
        }
    }
    return (
        <div className={`card ${className} ${getType()}`}>
            {children}
        </div>
    )
}
