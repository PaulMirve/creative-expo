import React from 'react'

export default function Heading({ className = '', children, type, color }) {
    const getHeading = () => {
        switch (type) {
            case 'huge':
                return <h1 className={`heading-huge ${className}`}>{children}</h1>
            case 'secondary':
                return <h2 className={`heading-secondary ${className}`}>{children}</h2>
            case '3':
                switch (color) {
                    case 'black':
                        return <h3 className={`heading-3 heading-3--black ${className}`}>{children}</h3>
                    default:
                        return <h3 className={`heading-3 ${className}`}>{children}</h3>
                }

            default:
                return <h1 className={`heading-primary ${className}`}>{children}</h1>
        }
    }
    return getHeading();
}
