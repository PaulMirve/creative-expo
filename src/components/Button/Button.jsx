import React from 'react'

export default function Button({ children, className, type }) {
    const getButtonType = () => {
        switch (type) {
            case 'secondary':
                return 'btn--secondary';
            default:
                return 'btn--primary';
        }
    }

    return (
        <button className={`btn ${className} ${getButtonType()}`} > {children}</button >
    )
}
