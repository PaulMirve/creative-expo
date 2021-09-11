import React from 'react'

export default function ButtonBox({ className = '', children }) {
    return (
        <div className={`button-box ${className}`}>
            {children}
        </div>
    )
}
