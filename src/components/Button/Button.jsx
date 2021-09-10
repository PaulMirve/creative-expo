import React from 'react'

export default function Button({ children, onClick = () => { }, className, type, size }) {
    const getButtonType = () => {
        switch (type) {
            case 'secondary':
                return 'btn--secondary';
            case 'secondary-reverse':
                return 'btn--secondary btn--reverse';
            case 'reverse':
                return 'btn--primary btn--reverse';
            default:
                return 'btn--primary';
        }
    }

    const getSize = () => {
        switch (size) {
            case 'md':
                return 'btn--md';
            default:
                return '';
        }
    }

    return (
        <button onClick={onClick} className={`btn ${className} ${getButtonType()} ${getSize()}`} > {children}</button >
    )
}
