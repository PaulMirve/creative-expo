import React from 'react'
import WhyGrid from './WhyGrid/WhyGrid'
import PropertyDescriptions from './PropertyDescriptions/PropertyDescriptions';

export default function Main() {
    return (
        <main style={{ padding: '8rem 8vw' }}>
            <WhyGrid />
            <PropertyDescriptions />
        </main>
    )
}
